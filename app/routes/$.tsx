import { useLocation } from "@remix-run/react";

import { NotFound } from "~/entities/404";
import { GraphqlPath, RestClientPathHandler } from "~/features/method-path";
import { GraphqlRequestType, RestRequestType } from "~/shared/types";

export default function NotFound404() {
  const location = useLocation();
  const path = location.pathname;
  const firstSegment = (path.split("/")[1] || "").toLowerCase();
  const isRestRequest = Object.values(RestRequestType)
    .map((type) => type.toLowerCase())
    .includes(firstSegment);
  const isGraphqlRequest =
    firstSegment === GraphqlRequestType.GRAPHQL.toLowerCase();

  if (isRestRequest || path === "/rest-client") {
    return <RestClientPathHandler />;
  }

  if (isGraphqlRequest || path === "/graphiql-client") {
    return <GraphqlPath />;
  }

  return <NotFound />;
}
