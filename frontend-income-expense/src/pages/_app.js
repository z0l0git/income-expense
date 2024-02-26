import "@/styles/globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import { DataProvider } from "@/context/DataContext";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeProvider>
  );
}
