import { FC } from "react";

const RequestTypes = {
  GRAPHQL: "GRAPHQL",
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
  OPTIONS: "OPTIONS",
  HEAD: "HEAD",
  CONNECT: "CONNECT",
  TRACE: "TRACE",
};

interface RequestTypeBadgeProps {
  type: string;
}

const getRequestTypeClasses = (type: string) => {
  switch (type) {
    case RequestTypes.GET:
      return "bg-green-100 text-green-800";
    case RequestTypes.POST:
      return "bg-blue-100 text-blue-800";
    case RequestTypes.PUT:
      return "bg-yellow-100 text-yellow-800";
    case RequestTypes.DELETE:
      return "bg-red-100 text-red-800";
    case RequestTypes.PATCH:
      return "bg-orange-100 text-orange-800";
    case RequestTypes.OPTIONS:
      return "bg-gray-100 text-gray-800";
    case RequestTypes.HEAD:
      return "bg-teal-100 text-teal-800";
    case RequestTypes.CONNECT:
      return "bg-indigo-100 text-indigo-800";
    case RequestTypes.TRACE:
      return "bg-pink-100 text-pink-800";
    case RequestTypes.GRAPHQL:
      return "bg-purple-100 text-purple-800";
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
