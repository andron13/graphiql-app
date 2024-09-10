import { useEffect, useState } from "react";

import { HistoryRequest } from "~/shared/types";

export function useRequestHistory() {
  const [history, setHistory] = useState<HistoryRequest[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem("requestHistory");
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    }
  }, []);

  const addRequestToHistory = (request: HistoryRequest) => {
    setHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, request];
      if (typeof window !== "undefined") {
        localStorage.setItem("requestHistory", JSON.stringify(updatedHistory));
        console.log("Added request to history:", updatedHistory);
      }
      return updatedHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("requestHistory");
      console.log("History cleared.");
    }
  };

  return {
    history,
    addRequestToHistory,
    clearHistory,
  };
}
