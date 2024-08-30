import { FC } from "react";

import { RequestType } from "~/shared/types";

interface RequestTypeBadgeProps {
  type: RequestType;
}

const getRequestTypeClasses = (type: RequestType) => {
  switch (type) {
    case RequestType.GET:
      return "bg-green-100 text-green-800";
    case RequestType.POST:
      return "bg-blue-100 text-blue-800";
    case RequestType.PUT:
      return "bg-yellow-100 text-yellow-800";
    case RequestType.DELETE:
      return "bg-red-100 text-red-800";
    case RequestType.GRAPHQL:
      return "bg-purple-100 text-purple-800";
    case RequestType.PATCH:
      return "bg-orange-100 text-orange-800";
    case RequestType.OPTIONS:
      return "bg-gray-100 text-gray-800";
    case RequestType.HEAD:
      return "bg-teal-100 text-teal-800";
    case RequestType.CONNECT:
      return "bg-indigo-100 text-indigo-800";
    case RequestType.TRACE:
      return "bg-pink-100 text-pink-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const RequestTypeBadge: FC<RequestTypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-semibold ${getRequestTypeClasses(type)}`}
    >
      {type}
    </span>
  );
};
