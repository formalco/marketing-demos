import type { Metadata } from "next";
import styles from "./theme.module.css";

export const metadata: Metadata = {
  title: "Formal – Variant V3",
};

export default function LayoutV3({ children }: { children: React.ReactNode }) {
  return <div className={styles.themeV3}>{children}</div>;
}


