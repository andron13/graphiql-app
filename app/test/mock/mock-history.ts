import { HistoryRequest, RequestType } from "~/shared/types";

export const mockHistory: HistoryRequest[] = [
  {
    type: RequestType.GET,
    url: "https://api.example.com/resource/1",
    timestamp: Date.now() - 10000,
  },
  {
    type: RequestType.POST,
    url: "https://api.example.com/resource",
    timestamp: Date.now() - 5000,
  },
  {
    type: RequestType.PUT,
    url: "https://api.example.com/resource/1",
    timestamp: Date.now() - 3000,
  },
  {
    type: RequestType.DELETE,
    url: "https://api.example.com/resource/123",
    timestamp: Date.now() - 2000,
  },
  {
    type: RequestType.GRAPHQL,
    url: "https://graphql.example.com/query",
    timestamp: Date.now() - 1000,
  },
];
