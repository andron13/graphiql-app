import { useEffect, useState } from "react";

import { HistoryRequest } from "~/shared/types";

export function useRequestHistory() {
  const [history, setHistory] = useState<HistoryRequest[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("requestHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("requestHistory", JSON.stringify(history));
  }, [history]);

  const addRequestToHistory = (request: HistoryRequest) => {
    setHistory((prevHistory) => [...prevHistory, request]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("requestHistory");
  };

  return {
    history,
    addRequestToHistory,
    clearHistory,
  };
}
