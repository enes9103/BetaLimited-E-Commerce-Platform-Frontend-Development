//For Service Shopping Card Structure
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStorageData } from "../../helpers/StorageHelper";

const initialState = {
  // addProductToCard
  isAddProductToCardLoading: false,
  addProductToCardError: false,
  addProductToCardResp: [],
  // viewProductCard
  isViewProductCardLoading: false,
  viewProductCardError: false,
  viewProductCardResp: [],
  // deleteProductFromCard
  isDeleteProductFromCardLoading: false,
  deleteProductFromCardError: false,
  deleteProductFromCardResp: [],
};

export const addProductToCard = createAsyncThunk(
  "productCard/addProductToCard",
  async (product, thunkAPI) => {
    const { id, quantity } = product;
    const sessionId = await getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    try {
      for (let i = 0; i < quantity; i++) {
        await axios.post(
          `${baseURL}/add-to-cart?id=${id}`,
          {},
          {
            headers: {
              "Session-Id": sessionId || null,
            },
          }
        );
      }
      return { success: true };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const viewProductCard = createAsyncThunk(
  "productCard/viewProductCard",
  async (_, thunkAPI) => {
    const sessionId = getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    try {
      const resp = await axios.get(`${baseURL}/view-cart`, {
        headers: {
          "Session-Id": sessionId || null,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteProductFromCard = createAsyncThunk(
  "productCard/deleteProductFromCard",
  async (product, thunkAPI) => {
    console.log(product);
    const sessionId = await getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    try {
      for (const item of product) {
        await axios.post(
          `${baseURL}/subtract-from-cart?id=${item.productId}`,
          {},
          {
            headers: {
              "Session-Id": sessionId || null,
            },
          }
        );
      }
      return { success: true };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const manageCardSlice = createSlice({
  name: "addProductToCard",
  initialState,
  reducers: {},
  extraReducers: {
    // addProductToCard
    [addProductToCard.pending]: (state) => {
      state.isAddProductToCardLoading = true;
    },
    [addProductToCard.fulfilled]: (state, action) => {
      state.isAddProductToCardLoading = false;
      state.addProductToCardError = false;
      state.addProductToCardResp = action.payload;
    },
    [addProductToCard.rejected]: (state) => {
      state.isAddProductToCardLoading = false;
      state.addProductToCardError = true;
    },
    // viewProductCard
    [viewProductCard.pending]: (state) => {
      state.isViewProductCardLoading = true;
    },
    [viewProductCard.fulfilled]: (state, action) => {
      state.isViewProductCardLoading = false;
      state.viewProductCardError = false;
      state.viewProductCardResp = action.payload;
    },
    [viewProductCard.rejected]: (state) => {
      state.isViewProductCardLoading = false;
      state.viewProductCardError = true;
    },
    // deleteProductFromCard
    [deleteProductFromCard.pending]: (state) => {
      state.isDeleteProductFromCardLoading = true;
    },
    [deleteProductFromCard.fulfilled]: (state, action) => {
      state.isDeleteProductFromCardLoading = false;
      state.deleteProductFromCardError = false;
      state.deleteProductFromCardResp = action.payload;
    },
    [deleteProductFromCard.rejected]: (state) => {
      state.isDeleteProductFromCardLoading = false;
      state.deleteProductFromCardError = true;
    },
    [deleteProductFromCard.type]: (state, action) => {
      state.viewProductCardResp = action.payload;
    },
  },
});

export default manageCardSlice.reducer;
