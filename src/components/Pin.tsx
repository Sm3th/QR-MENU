import type { ReactNode } from "react";

interface PinProps {
  kind: "chef" | "pop";
  children: ReactNode;
}

/* Popüler / Şef rozeti */
export function Pin({ kind, children }: PinProps) {
  return <span className={"pin pin--" + kind}>{children}</span>;
}
