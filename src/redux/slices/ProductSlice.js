import axios from "axios";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStorageData } from "../../helpers/StorageHelper";

const initialState = {
  // getProducts
  isLoading: false,
  getProductsError: false,
  getProductsResp: [],
  // searchProducts
  isSearchProductsLoading: false,
  searchProductsError: false,
  searchProductsResp: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const sessionId = getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    // Get session ID and prepare headers
    const headers = {
      "Content-Type": "application/json",
      "Session-ID": sessionId || null,
    };

    try {
      const resp = await axios.get(`${baseURL}/products`, { headers });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchValue, thunkAPI) => {
    const sessionId = getStorageData("Session-ID");

    // Get base URL from environment variable
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;

    // Get session ID and prepare headers
    const headers = {
      "Content-Type": "application/json",
      "Session-ID": sessionId || null,
    };

    try {
      const resp = await axios.get(`${baseURL}/search?name=${searchValue}`, {
        headers,
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const clearSearchResults = createAction("products/clearSearchResults");

const productsSlice = createSlice({
  name: "getProducts",
  initialState,
  reducers: {},
  extraReducers: {
    // getProducts
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getProductsError = false;
      state.getProductsResp = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
      state.getProductsError = true;
    },
    // searchProducts
    [searchProducts.pending]: (state) => {
      state.isSearchProductsLoading = true;
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.isSearchProductsLoading = false;
      state.searchProductsError = false;
      state.searchProductsResp = action.payload;
    },
    [searchProducts.rejected]: (state) => {
      state.isSearchProductsLoading = false;
      state.searchProductsError = true;
    },
    [clearSearchResults]: (state) => {
      state.searchProductsResp = [];
    },
  },
});

export default productsSlice.reducer;
