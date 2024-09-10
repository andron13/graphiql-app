import { FC, ReactNode } from "react";

import { Aside } from "~/entities";

export const RoutesLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex">
    <Aside />
    {children}
  </div>
);
