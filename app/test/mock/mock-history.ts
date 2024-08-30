import { HistoryRequest, RequestType } from "~/shared/types";

export const mockHistory: HistoryRequest[] = [
  {
    type: RequestType.GRAPHQL,
    url: "https://graphql.example.com/query",
    timestamp: Date.now() - 10000,
  },
  {
    type: RequestType.GET,
    url: "https://api.example.com/resource/1",
    timestamp: 1716892239000,
  },
  {
    type: RequestType.POST,
    url: "https://api.example.com/resource",
    timestamp: 1716633039000,
  },
  {
    type: RequestType.PUT,
    url: "https://api.example.com/resource/1",
    timestamp: 1716460239000,
  },
  {
    type: RequestType.DELETE,
    url: "https://api.example.com/resource/123",
    timestamp: 1504095567183,
  },
];
