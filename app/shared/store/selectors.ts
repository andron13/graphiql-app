import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./";

export const selectRequestHistory = (state: RootState) =>
  state.history.requestHistory;

export const selectRequestHistoryByType = (requestType: string) =>
  createSelector(selectRequestHistory, (requestHistory) =>
    requestHistory.filter((request) => request.type === requestType),
  );

export const selectLastRequest = createSelector(
  selectRequestHistory,
  (requestHistory) => requestHistory[requestHistory.length - 1],
);
