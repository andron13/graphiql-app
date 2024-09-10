import { FC, ReactNode } from "react";

import { Aside } from "~/entities";

export const RoutesLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex gap-4">
    <Aside />
    <div className="flex w-[700px] flex-col">{children}</div>
  </div>
);
