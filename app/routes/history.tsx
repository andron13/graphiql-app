import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RoutesLayout } from "~/layouts/routes-layout";
import { useRequestHistory } from "~/shared/hooks";

export default function History() {
  const { history } = useRequestHistory();

  if (history.length === 0) {
    return <HistoryNoRequests />;
  }

  return (
    <RoutesLayout>
      <HistoryList requests={history} />
    </RoutesLayout>
  );
}
