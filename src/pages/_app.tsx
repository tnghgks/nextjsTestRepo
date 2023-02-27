import { Layout } from "@/components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
