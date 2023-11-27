import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStorageData } from "../../helpers/StorageHelper";

const initialState = {
  isLoading: false,
  getSessionIdError: false,
  getSessionIdResp: [],
};

export const getSessionId = createAsyncThunk(
  "session/getSessionId",
  async (thunkAPI) => {
    const baseURL = process.env.REACT_APP_BETA_LIMITED_API_URL;
    try {
      const resp = await axios.get(`${baseURL}/createsession`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const getSessionIdSlice = createSlice({
  name: "getSessionId",
  initialState,
  reducers: {},
  extraReducers: {
    // getSessionId
    [getSessionId.pending]: (state) => {
      state.isLoading = true;
    },
    [getSessionId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getSessionIdError = false;
      state.getSessionIdResp = action.payload;
    },
    [getSessionId.rejected]: (state) => {
      state.isLoading = false;
      state.getSessionIdError = true;
    },
  },
});

export default getSessionIdSlice.reducer;
