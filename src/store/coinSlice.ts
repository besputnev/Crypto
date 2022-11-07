import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Coin } from "../interfaces";
import { URL } from "../url";

interface CoinState {
  coins: Coin[] | null;
  loading: boolean;
  errors: any;
}
const initialState: CoinState = {
  coins: [],
  loading: false,
  errors: [],
};

export const getCoins = createAsyncThunk<Coin[]>(
  "coins/getCoins",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<Coin[]>) => {
      state.coins = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) =>{
      state.loading = true;
    })
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.loading = false;
    })
    builder.addCase(getCoins.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    })
  }
});

export default coinSlice.reducer;
export const { setCoins } = coinSlice.actions;
