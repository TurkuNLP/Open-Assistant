import Head from "next/head";
import { TaskOption } from "src/components/Dashboard";
import { allTaskOptions } from "src/components/Dashboard/TaskOption";
import { DashboardLayout } from "src/components/Layout";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const AllTasks = () => {
  return (
    <>
      <Head>
        <title>Kaikki tehtävät</title>
        <meta name="description" content="Kaikki Avoimen Avustajan tehtävät." />
      </Head>
      <TaskOption content={allTaskOptions} />
    </>
  );
};

AllTasks.getLayout = DashboardLayout;

export default AllTasks;
