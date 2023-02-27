import Head from "next/head";
import { useContext } from "react";
import UserProductsList from "../components/user-products-list";
import { ProductsContext } from "../store/productsContext";

export default function Cart() {
  const productsCtx = useContext(ProductsContext);
  const { cart } = productsCtx;

  return (
    <>
      <Head>
        <title>Nextjs-Storefront | Shopping Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 className="mb-10 text-center text-3xl font-bold">Shopping Cart</h2>
        <UserProductsList products={cart} />
      </section>
    </>
  );
}
