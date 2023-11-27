//For Service Shopping Card Structure
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStorageData } from "../../helpers/StorageHelper";

const initialState = {
  // addProductToCard
  isAddProductToCardLoading: false,
  addProductToCardError: false,
  addProductToCardResp: [],
  // addProductToCard
  isViewProductCardLoading: false,
  viewProductCardError: false,
  viewProductCardResp: [],
};

export const addProductToCard = createAsyncThunk(
  "productCard/addProductToCard",
  async (product, thunkAPI) => {
    const {id, quantity} = product
    const sessionId = getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    // Get session ID and prepare headers
    const headers = {
      "Content-Type": "application/json",
      "Session-ID": sessionId || null,
      // "Session-ID": "7vf1imzjb",
    };

    try {
      const resp = await axios.post(`${baseURL}/add-to-cart?id=${id}`, {
        headers,
      });
      return resp.data;
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

    // Get session ID and prepare headers
    const headers = {
      "Content-Type": "application/json",
      "Session-ID": sessionId || null,
      // "Session-ID": "7vf1imzjb",
    };

    try {
      const resp = await axios.get(`${baseURL}/view-cart`, {
        headers,
      });
      return resp.data;
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
  },
});

export default manageCardSlice.reducer;
