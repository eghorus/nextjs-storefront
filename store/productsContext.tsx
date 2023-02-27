import { createContext, useReducer } from "react";
import Product from "../models/product";
import { initialState, productsReducer } from "./productsReducer";

const initialContext = {
  products: [] as Product[],
  cart: [] as Product[],
  wishList: [] as Product[],
  storeProducts: (products: Product[]) => {},
  addProductToCart: (productId: number) => {},
  removeProductFromCart: (productId: number) => {},
  addProductToWishList: (productId: number) => {},
  removeProductFromWishList: (productId: number) => {},
};

export const ProductsContext = createContext(initialContext);

const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsState, dispatch] = useReducer(productsReducer, initialState);

  const contextValue = {
    products: productsState.products,
    cart: productsState.cart,
    wishList: productsState.wishList,
    storeProducts: (products: Product[]) => dispatch({ type: "STORE_PRODUCTS", payload: { products } }),
    addProductToCart: (productId: number) => dispatch({ type: "ADD_PRODUCT_CART", payload: { productId } }),
    removeProductFromCart: (productId: number) => dispatch({ type: "REMOVE_PRODUCT_CART", payload: { productId } }),
    addProductToWishList: (productId: number) => dispatch({ type: "ADD_PRODUCT_WISHLIST", payload: { productId } }),
    removeProductFromWishList: (productId: number) =>
      dispatch({ type: "REMOVE_PRODUCT_WISHLIST", payload: { productId } }),
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
