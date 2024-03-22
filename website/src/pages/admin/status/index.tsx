import {
  Box,
  Card,
  CardBody,
  CircularProgress,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import React, { FormEvent } from "react";
import { AdminArea } from "src/components/AdminArea";
import { AdminLayout } from "src/components/Layout";
import { get } from "src/lib/api";
import useSWRImmutable from "swr/immutable";
export { getStaticProps } from "src/lib/defaultServerSideProps";

/**
 * Provides the admin status page that shows result of calls to several backend API endpoints,
 * namely /api/v1/tasks/availability, /api/v1/stats/, /api/v1/stats/tree_manager
 */

const StatusIndex = () => {
  const { data: dataStatus, error: errorStatus } = useSWRImmutable("/api/admin/status", get);
  const { t } = useTranslation(["common"]);

  const { tasksAvailability, stats, treeManager } = dataStatus || {};

  const onSystemMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let submittedText = "";
    for (const value of formData.values()) {
      if (typeof value === "string") {
        submittedText += value;
      }
    }

    // set system message somewhere here
  };

  return (
    <>
      <Head>
        <title>{`${t("common:status")} - ${t("common:title")}`}</title>
      </Head>

      <AdminArea>
        <SimpleGrid columns={[1, 1, 1, 1, 1, 1, 2]} gap={4}>
          <Card>
            <CardBody>
              <Text as="h1" fontSize="3xl" textAlign="center">
                Post a system status message
              </Text>
              <Card>
                <CardBody>
                  <form onSubmit={onSystemMessageSubmit} className="w-full">
                    <ul className="list-none flex">
                      <li className="w-full mr-3">
                        <input
                          type="text"
                          name="Input System Message"
                          className="border-2 rounded-md h-10 w-full"
                          autoComplete="off"
                          disabled={true}
                          placeholder={"Planned feature, doesn't work yet."}
                        />
                      </li>
                      <li>
                        <button type="submit" className="text-blue-50 rounded-md bg-gray-300 h-10 w-32" disabled={true}>
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                  <div>
                    <p className="mt-6">Current system message:</p>
                    <p>{/* print system message here */}</p>
                  </div>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Text as="h1" fontSize="3xl" textAlign="center">
                /api/v1/tasks/availability
              </Text>
              <Card variant="json">
                <CardBody>
                  {tasksAvailability?.status === "fulfilled" ? (
                    <pre>{JSON.stringify(tasksAvailability.value, null, 2)}</pre>
                  ) : tasksAvailability?.status === "rejected" ? (
                    <pre>{JSON.stringify(tasksAvailability.reason, null, 2)}</pre>
                  ) : errorStatus ? (
                    <pre>{JSON.stringify(errorStatus, null, 2)}</pre>
                  ) : (
                    <CircularProgress isIndeterminate />
                  )}
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Text as="h1" fontSize="3xl" textAlign="center">
                /api/v1/stats/
              </Text>
              <Card variant="json">
                <CardBody>
                  {stats?.status === "fulfilled" ? (
                    <pre>{JSON.stringify(stats.value, null, 2)}</pre>
                  ) : stats?.status === "rejected" ? (
                    <pre>{JSON.stringify(stats.reason, null, 2)}</pre>
                  ) : errorStatus ? (
                    <pre>{JSON.stringify(errorStatus, null, 2)}</pre>
                  ) : (
                    <CircularProgress isIndeterminate />
                  )}
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </SimpleGrid>
        <br />
        <Card>
          <CardBody>
            <Text as="h1" fontSize="3xl" textAlign="center">
              /api/v1/stats/tree_manager
            </Text>
            {treeManager?.status === "fulfilled" ? (
              <Box>
                <Text as="h2" fontSize="2xl">
                  state_counts
                </Text>
                <Card variant="json">
                  <CardBody>
                    <pre>{JSON.stringify(treeManager.value.state_counts, null, 2)}</pre>
                  </CardBody>
                </Card>
                <TableContainer>
                  <br />
                  <Text as="h2" fontSize="2xl">
                    message_counts
                  </Text>
                  <Table variant="simple">
                    <TableCaption>Tree Manager</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Message Tree ID</Th>
                        <Th>State</Th>
                        <Th>Depth</Th>
                        <Th>Oldest</Th>
                        <Th>Youngest</Th>
                        <Th>Count</Th>
                        <Th>Goal Tree Size</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {treeManager.value.message_counts.map(
                        ({ message_tree_id, state, depth, oldest, youngest, count, goal_tree_size }) => (
                          <Tr key={message_tree_id}>
                            <Td>{message_tree_id}</Td>
                            <Td>{state}</Td>
                            <Td>{depth}</Td>
                            <Td>{oldest}</Td>
                            <Td>{youngest}</Td>
                            <Td>{count}</Td>
                            <Td>{goal_tree_size}</Td>
                          </Tr>
                        )
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            ) : treeManager?.status === "rejected" ? (
              <pre>{JSON.stringify(treeManager.reason, null, 2)}</pre>
            ) : errorStatus ? (
              <pre>{JSON.stringify(errorStatus, null, 2)}</pre>
            ) : (
              <CircularProgress isIndeterminate />
            )}
          </CardBody>
        </Card>
      </AdminArea>
    </>
  );
};

StatusIndex.getLayout = AdminLayout;

export default StatusIndex;
