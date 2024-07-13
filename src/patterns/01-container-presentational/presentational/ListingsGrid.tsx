import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const ListingsGrid = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        maxWidth: "800px",
      }}
    >
      {children}
    </div>
  );
};
