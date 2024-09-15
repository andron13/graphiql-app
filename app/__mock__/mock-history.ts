import {
  GraphqlRequestType,
  HistoryRequest,
  RestRequestType,
} from "~/shared/types";

export const mockHistory: HistoryRequest[] = [
  {
    type: GraphqlRequestType.GRAPHQL,
    url: "https://graphql.example.com/query",
    timestamp: Date.now() - 10000,
    shortUrl: "https://graphql.example.com/query",
  },
  {
    type: RestRequestType.GET,
    url: "https://api.example.com/resource/1",
    timestamp: 1716892239000,
    shortUrl: "https://graphql.example.com/query",
  },
  {
    type: RestRequestType.GET,
    url: "https://api.example.com/resource",
    timestamp: 1716633039000,
    shortUrl: "https://graphql.example.com/query",
  },
  {
    type: RestRequestType.GET,
    url: "https://api.example.com/resource/1",
    timestamp: 1716460239000,
    shortUrl: "https://graphql.example.com/query",
  },
  {
    type: RestRequestType.GET,
    url: "https://api.example.com/resource/123",
    timestamp: 1504095567183,
    shortUrl: "https://graphql.example.com/query",
  },
];
