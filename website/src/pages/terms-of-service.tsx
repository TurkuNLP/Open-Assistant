import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { TermsOfService } from "src/components/ToS";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const TermsOfServicePage = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Head>
        <title>{`${t("common:terms_of_service")} - ${t("common:title")}`}</title>
        <meta name="description" content="Avoimen Avustajan palveluehdot" />
      </Head>
      <Box p="6" className="oa-basic-theme">
        <Box className="max-w-4xl mx-auto">
          <Heading as="h1" size="xl" color="blue.500" mb="6">
            Avoin Avustaja - Käyttöehdot
          </Heading>
          <TermsOfService />
        </Box>
      </Box>
    </>
  );
};

export default TermsOfServicePage;
