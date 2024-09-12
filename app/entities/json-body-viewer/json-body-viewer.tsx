import { FC } from "react";
import JSONPretty from "react-json-pretty";

import "./json-pretty.css";

interface JsonBodyViewerProps {
  data: unknown;
}

export const JsonBodyViewer: FC<JsonBodyViewerProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  let jsonData;
  try {
    jsonData = typeof data === "string" ? JSON.parse(data) : data;
  } catch (error) {
    return <div className="__json-pretty-error__">Invalid JSON data</div>;
  }

  return <JSONPretty data={jsonData} />;
};
