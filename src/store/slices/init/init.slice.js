import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  demoHandler
} from "./init.thunk";

const INIT_STATE = {
  demostate:{}
};

export const fetchDemoStateAsyncThunk = createAsyncThunk(
    "fetchDemoState",
    demoHandler
)


const initSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {
    setDemoState: (state, action) => {
      state.demostate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchDemoStateAsyncThunk.pending,(state)=>{
        console.log("pending");
        return state
    })
    .addCase(fetchDemoStateAsyncThunk.fulfilled,(state)=>{
        console.log("fulfilled");
        return state
    })
    .addCase(fetchDemoStateAsyncThunk.rejected,(state)=>{
        console.log("rejected");
        return state
    });
  },
});

export const { setDemoState } = initSlice.actions;

export default initSlice.reducer;