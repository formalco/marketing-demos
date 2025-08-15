import type { Metadata } from "next";
import localStyles from "./theme.module.css";

export const metadata: Metadata = {
  title: "Formal – Variant V1",
};

export default function LayoutV1({ children }: { children: React.ReactNode }) {
  return (
    <div className={localStyles.themeV1}>
      {children}
    </div>
  );
}


