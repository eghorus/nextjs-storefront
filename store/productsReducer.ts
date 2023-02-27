import type Product from "../models/product";

type InitialState = {
  products: Product[];
  cart: Product[];
  wishList: Product[];
};

type DispatchedAction =
  | {
      type: "STORE_PRODUCTS";
      payload: { products: Product[] };
    }
  | {
      type: "ADD_PRODUCT_CART" | "REMOVE_PRODUCT_CART" | "ADD_PRODUCT_WISHLIST" | "REMOVE_PRODUCT_WISHLIST";
      payload: { productId: number };
    };

export const initialState = {
  products: [],
  cart: [],
  wishList: [],
};

export const productsReducer = (state: InitialState, action: DispatchedAction) => {
  switch (action.type) {
    case "STORE_PRODUCTS":
      return { ...state, products: action.payload.products };
    case "ADD_PRODUCT_CART":
      const cartProduct = state.products.find((p) => p.id === action.payload.productId) as Product;
      if (state.cart.find((p) => p.id === cartProduct.id)) return state;
      return { ...state, cart: [...state.cart, cartProduct] };
    case "REMOVE_PRODUCT_CART":
      const cartAfterRemove = state.cart.filter((p) => p.id !== action.payload.productId);
      return { ...state, cart: [...cartAfterRemove] };
    case "ADD_PRODUCT_WISHLIST":
      const wishListProduct = state.products.find((p) => p.id === action.payload.productId) as Product;
      if (state.wishList.find((p) => p.id === wishListProduct.id)) return state;
      return { ...state, wishList: [...state.wishList, wishListProduct] };
    case "REMOVE_PRODUCT_WISHLIST":
      const wishListAfterRemove = state.wishList.filter((p) => p.id !== action.payload.productId);
      return { ...state, wishList: [...wishListAfterRemove] };
    default:
      return state;
  }
};
