import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthProvider";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/routes/ProtectedRoute";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProtectedRoute>
    </AuthProvider>
  );
}
