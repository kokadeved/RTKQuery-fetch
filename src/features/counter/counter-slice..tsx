import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 100,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    amountAdd(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, amountAdd } = CounterSlice.actions;
export default CounterSlice.reducer;
