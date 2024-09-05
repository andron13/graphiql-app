import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RequestHistoryViewer } from "~/features/local-storage-viewer-props";
import { useRequestHistory } from "~/shared/hooks";

export default function History() {
  const { history } = useRequestHistory();

  // if (history.length === 0) {
  //   return <HistoryNoRequests />;
  // }

  return (
    <>
      <HistoryList requests={history} />
    </>
  );
}
