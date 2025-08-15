import type { Metadata } from "next";
import styles from "./theme.module.css";

export const metadata: Metadata = {
  title: "Formal – Variant V2",
};

export default function LayoutV2({ children }: { children: React.ReactNode }) {
  return <div className={styles.themeV2}>{children}</div>;
}


