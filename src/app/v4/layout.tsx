import "./theme.css";
import V4ThemeProvider from "./theme-provider";
import Nav from "./components/Nav";

// export const metadata: Metadata = {
//   title: "Formal – Variant V4",
// };

export default function LayoutV4({ children }: { children: React.ReactNode }) {
  return (
    <V4ThemeProvider>
      <div className="v4-theme min-h-screen">
        <Nav />
        {children}
      </div>
    </V4ThemeProvider>
  );
}


