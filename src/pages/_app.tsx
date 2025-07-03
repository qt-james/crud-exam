import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthProvider";
import { AlertProvider } from "@/context/AlertProvider";
import ThemeProvider from "@/context/ThemeProvider";
import Layout from "@/components/layout/Layout";
import RouteLayout from "@/components/routes/RouteLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouteLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RouteLayout>
        </ThemeProvider>
      </AuthProvider>
    </AlertProvider>
  );
}
