import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthProvider";
import Layout from "@/components/layout/Layout";
import RouteLayout from "@/components/routes/RouteLayout";
import { AlertProvider } from "@/context/AlertProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <AuthProvider>
        <RouteLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RouteLayout>
      </AuthProvider>
    </AlertProvider>
  );
}
