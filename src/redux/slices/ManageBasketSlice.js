// For Static Shopping Card Structure
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
};

// Sepet verilerini sessionStorage'a kaydeden ve alabilen yardımcı fonksiyonlar
const saveBasketToSessionStorage = (basketItems) => {
  sessionStorage.setItem("basketItems", JSON.stringify(basketItems));
};

const loadBasketFromSessionStorage = () => {
  const storedBasket = sessionStorage.getItem("basketItems");
  return storedBasket ? JSON.parse(storedBasket) : [];
};

export const manageBasketSlice = createSlice({
  name: "manageBasket",
  initialState: {
    basketItems: loadBasketFromSessionStorage(),
  },
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;

      const existingProductIndex = state.basketItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.basketItems[existingProductIndex].quantity += product.quantity;
      } else {
        state.basketItems.push({ ...product, quantity: product.quantity });
      }

      saveBasketToSessionStorage(state.basketItems);
    },
    removeFromBasket: (state, action) => {
      const itemIdToRemove = action.payload;
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== itemIdToRemove
      );
      saveBasketToSessionStorage(state.basketItems);
    },
  },
});

export const { addToBasket, removeFromBasket } = manageBasketSlice.actions;

export const selectBasketItems = (state) => state.manageBasket.basketItems;

export default manageBasketSlice.reducer;
