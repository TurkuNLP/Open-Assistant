import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Grid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export { getServerSideProps } from "src/lib/defaultServerSideProps";
import { AdminArea } from "src/components/AdminArea";
import { JsonCard } from "src/components/JsonCard";
import { AdminLayout } from "src/components/Layout";
import { MessageHistoryTable } from "src/components/Messages/MessageHistoryTable";
import { MessageTree } from "src/components/Messages/MessageTree";
import { get } from "src/lib/api";
import { Message, MessageRevision, MessageWithChildren } from "src/types/Conversation";
import useSWRImmutable from "swr/immutable";

const MessageDetail = () => {
  const router = useRouter();
  const messageId = router.query.id;
  const { data, isLoading, error } = useSWRImmutable<{
    tree: MessageWithChildren | null;
    message?: Message;
    tree_state: {
      message_tree_id: string;
      state: string;
      active: boolean;
      goal_tree_size: number;
      max_children_count: number;
      max_depth: number;
      origin: string;
    };
  }>(`/api/admin/messages/${messageId}/tree`, get, {
    keepPreviousData: true,
  });
  const {
    data: revisions,
    isLoading: revisionsLoading,
    error: revisionError,
  } = useSWRImmutable<MessageRevision[]>(`/api/admin/messages/${messageId}/history`, get, { keepPreviousData: true });

  const { t } = useTranslation(["common"]);

  return (
    <>
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      <AdminArea>
        {(isLoading && !data) ||
          (revisionsLoading && !revisions && <CircularProgress isIndeterminate></CircularProgress>)}
        {error && "Unable to load message tree"}
        {revisionError && "Unable to load message revision history"}
        {data &&
          revisions &&
          (data.tree === null ? (
            "Unable to build tree"
          ) : (
            <Grid gap="6">
              <Card>
                <CardHeader fontWeight="bold" fontSize="xl" pb="0">
                  Viestin tiedot
                </CardHeader>
                <CardBody>
                  <JsonCard>{data.message}</JsonCard>
                </CardBody>
              </Card>
              <Card>
                <CardHeader fontWeight="bold" fontSize="xl" pb="0">
                  Viestihistoria
                </CardHeader>
                <CardBody>
                  <MessageHistoryTable message={data?.message} revisions={revisions} />
                </CardBody>
              </Card>
              <Card>
                <CardHeader fontWeight="bold" fontSize="xl" pb="0">
                  Viestipuu {data.tree.id}
                </CardHeader>
                <CardBody>
                  <TableContainer>
                    <Table variant="simple">
                      <TableCaption>Viestipuun tila</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Ominaisuus</Th>
                          <Th>Arvo</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Tila</Td>
                          <Td>{data.tree_state.state}</Td>
                        </Tr>
                        <Tr>
                          <Td>Maalisyvyys</Td>
                          <Td>{data.tree_state.goal_tree_size}</Td>
                        </Tr>
                        <Tr>
                          <Td>Tämänhetkinen maksimisyvyys</Td>
                          <Td>{data.tree_state.max_depth}</Td>
                        </Tr>
                        <Tr>
                          <Td>Tämänhetkinen vastausten maksimimäärä</Td>
                          <Td>{data.tree_state.max_children_count}</Td>
                        </Tr>
                        <Tr>
                          <Td>Aktiivinen</Td>
                          <Td>{data.tree_state.active ? "Active" : "Not active"}</Td>
                        </Tr>
                        <Tr>
                          <Td>Alkuperä</Td>
                          <Td>{data.tree_state.origin || "null"}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
                <CardBody>
                  <MessageTree tree={data.tree} messageId={data.message?.id} />
                </CardBody>
              </Card>
            </Grid>
          ))}
      </AdminArea>
    </>
  );
};

MessageDetail.getLayout = AdminLayout;

export default MessageDetail;
