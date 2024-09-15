import { useEffect, useState } from "react";

import { HistoryRequest } from "~/shared/types";

/**
 * Custom React hook to manage request history in local storage.
 *
 * This hook provides functionality to retrieve, add, and clear request history.
 * It uses the browser's local storage to persist the history across page reloads.
 *
 * @returns {Object} An object containing the following properties:
 * @returns {HistoryRequest[]} history - The current list of request history items.
 * @returns {Function} addRequestToHistory - Function to add a new request to the history.
 * @returns {Function} clearHistory - Function to clear all history items.
 *
 * @example
 * const { history, addRequestToHistory, clearHistory } = useRequestHistory();
 *
 * addRequestToHistory({ ...requestData });
 * clearHistory();
 *
 * @author @andron13 - Andrej Podlubnyj
 */
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
      }
      return updatedHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("requestHistory");
    }
  };

  return {
    history,
    addRequestToHistory,
    clearHistory,
  };
}
