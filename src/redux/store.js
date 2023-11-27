import { configureStore } from "@reduxjs/toolkit";

//Slice Imports
import getSessionIdReducer from "./slices/SessionSlice";
import productsReducer from "./slices/ProductSlice";
import manageCardReducer from "./slices/ManageCardSlice";
import manageBasketReducer from "./slices/ManageBasketSlice";

export const store = configureStore({
  reducer: {
    session: getSessionIdReducer,
    products: productsReducer,
    productCard: manageCardReducer,
    manageBasket: manageBasketReducer,
  },
});
