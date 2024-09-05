import { useLocation } from "@remix-run/react";

import { NotFound } from "~/entities/404/not-found";
import { GraphqlPath } from "~/features/method-path/graphql-path";
import { RestPath } from "~/features/method-path/rest-path";
import { GraphqlRequestType, RestRequestType } from "~/shared/types";

export default function NotFound404() {
  const location = useLocation();

  const firstSegment = (location.pathname.split("/")[1] || "").toLowerCase();
  console.log("First segment:", firstSegment);
  const isRestRequest = Object.values(RestRequestType)
    .map((type) => type.toLowerCase())
    .includes(firstSegment);

  const isGraphqlRequest =
    firstSegment === GraphqlRequestType.GRAPHQL.toLowerCase();

  if (isRestRequest) {
    return <RestPath />;
  }

  if (isGraphqlRequest) {
    return <GraphqlPath />;
  }

  return <NotFound />;
}
