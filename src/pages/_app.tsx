import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthProvider";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
