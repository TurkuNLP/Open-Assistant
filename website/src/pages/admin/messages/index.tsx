import { Card, CardBody } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { AdminArea } from "src/components/AdminArea";
import { AdminLayout } from "src/components/Layout";
import { AdminMessageTable } from "src/components/Messages/AdminMessageTable";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const MessageList = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Head>
        <title>{t("common:messages") + " - " + t("common:title")}</title>
      </Head>
      <AdminArea>
        <Card>
          <CardBody>
            <AdminMessageTable includeUser></AdminMessageTable>
          </CardBody>
        </Card>
      </AdminArea>
    </>
  );
};

MessageList.getLayout = AdminLayout;

export default MessageList;
