import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { HistoryRequest } from "~/shared/types";
import { mockHistory } from "~/test/mock";

type HistoryState = {
  requestHistory: HistoryRequest[];
};

const initialState: HistoryState = {
  requestHistory: [...mockHistory],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<HistoryRequest>) => {
      state.requestHistory.push(action.payload);
    },
    clearHistory: (state) => {
      state.requestHistory = [];
    },
  },
});

export const { addRequest, clearHistory } = historySlice.actions;

export default historySlice.reducer;
