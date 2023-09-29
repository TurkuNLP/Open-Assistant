import { Box, Button, Center, Link, Text, useColorMode } from "@chakra-ui/react";
import { AlertTriangle } from "lucide-react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { EmptyState } from "src/components/EmptyState";
export { getDefaultServerSideProps as getStaticProps } from "src/lib/defaultServerSideProps";

function ServerError() {
  const { colorMode } = useColorMode();
  const titleColor = colorMode === "light" ? "blue.500" : "blue.300";
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Head>
        <title>{`500 - ${t("common:title")}`}</title>
        <meta name="404" content="Sorry, this page doesn't exist." />
      </Head>
      <Center flexDirection="column" gap="4" fontSize="lg" className="subpixel-antialiased oa-basic-theme">
        <EmptyState
          text="Pahoittelut, kohtasimme palvelinvirheen. Emme ole täysin varmoja, mitä tapahtui."
          icon={AlertTriangle}
        />
        <Box display="flex" flexDirection="column" alignItems="center" gap="2" mt="6">
          <Text fontSize="sm">{t("common:bug_description")}</Text>
          <Button
            width="fit-content"
            leftIcon={<AlertTriangle size="1em" color={titleColor} aria-hidden="true" />}
            variant="solid"
            size="xs"
          >
            <Link
              key="Report a Bug"
              href="https://github.com/TurkuNLP/Open-Assistant/issues/new/choose"
              aria-label="Report a Bug"
              className="flex items-center"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              {t("bug_button")}
            </Link>
          </Button>
        </Box>
      </Center>
    </>
  );
}

export default ServerError;
