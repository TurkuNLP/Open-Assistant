import Head from "next/head";
import { useTranslation } from "next-i18next";
import React from "react";
import { AdminArea } from "src/components/AdminArea";
import { AdminLayout } from "src/components/Layout";
import { UserTable } from "src/components/UserTable";
export { getStaticProps } from "src/lib/defaultServerSideProps";

/**
 * Provides the admin index page that will display a list of users and give
 * admins the ability to manage their access rights.
 */
const AdminIndex = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Head>
        <title>{`${t("common:users")} - ${t("common:title")}`}</title>
      </Head>
      <AdminArea>
        <UserTable />
      </AdminArea>
    </>
  );
};

AdminIndex.getLayout = AdminLayout;

export default AdminIndex;
