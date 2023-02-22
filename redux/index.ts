import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";

const store = configureStore({ reducer: productsReducer });

export default store;
