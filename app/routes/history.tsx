import { useSelector } from "react-redux";

import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RootState } from "~/shared/store";

export default function History() {
  const requestHistory = useSelector(
    (state: RootState) => state.history.requestHistory,
  );

  if (requestHistory.length === 0) {
    return <HistoryNoRequests />;
  }

  return <HistoryList requests={requestHistory} />;
}
