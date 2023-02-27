import "../styles/globals.css";
import type { AppProps } from "next/app";
import UiContextProvider from "../store/uiContext";
import ProductsContextProvider from "../store/productsContext";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <ProductsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductsContextProvider>
    </UiContextProvider>
  );
}
