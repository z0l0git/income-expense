import "@/styles/globals.css";
import ThemeProvider from "@/context/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
