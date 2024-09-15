import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RoutesLayout } from "~/layouts/routes-layout";
import { useRequestHistory } from "~/shared/hooks";

export default function History() {
  const { history, clearHistory } = useRequestHistory();

  if (history.length === 0) {
    return <HistoryNoRequests />;
  }

  return (
    <RoutesLayout>
      <HistoryList requests={history} />
      <button
        type="button"
        className="mt-2 w-fit rounded bg-rose-500 px-4 py-2 text-white"
        onClick={clearHistory}
      >
        Clear History
      </button>
    </RoutesLayout>
  );
}
