import { PropsWithChildren } from "react";

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  return <main className="main-body">{children}</main>;
};
