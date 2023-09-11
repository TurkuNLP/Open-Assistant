import { Box, Divider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

export function SlimFooter() {
  const { t } = useTranslation();
  return (
    <footer>
      <Divider />
      <Box display="flex" gap="4" flexDir="column" alignItems="center" my="8">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="20"
          minWidth="70"
          bg="gray.200"
          borderRadius="20%"
        >
          <Link href="/" aria-label="Home" className="flex items-center gap-1">
            <Image src="/images/logos/logo.png" className="mx-auto object-fill" width="48" height="48" alt="logo" />
          </Link>
        </Box>
        <nav>
          <Box display="flex" gap="5" fontSize="xs" color="blue.500" flexWrap="wrap" pb="8">
            <FooterLink href="/privacy-policy" label={t("privacy_policy")} />
            <FooterLink href="/terms-of-service" label={t("terms_of_service")} />
            {/* <FooterLink href="/team" label={t("team")} /> */}
            <FooterLink href="https://github.com/TurkuNLP/Open-Assistant" label={t("github")} />
            <FooterLink href="https://huggingface.co/turkunlp" label={t("hugging_face")} />
            {/* <FooterLink href="https://ykilcher.com/open-assistant-discord" label={t("discord")} /> */}
            <FooterLink href="https://projects.laion.ai/Open-Assistant/docs/intro" label={t("docs")} />
            <FooterLink href="https://projects.laion.ai/Open-Assistant/docs/faq" label={t("faq")} />
          </Box>
        </nav>
      </Box>
    </footer>
  );
}

const FooterLink = ({ href, label }: { href: string; label: string }) =>
  useMemo(
    () => (
      <Link
        href={href}
        rel="noopener noreferrer nofollow"
        target="_blank"
        aria-label={label}
        className="hover:underline underline-offset-2"
      >
        {label}
      </Link>
    ),
    [href, label]
  );
