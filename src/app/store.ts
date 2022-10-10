import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice.";
import { ApiSlice } from "../features/dogs/users-api-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(ApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
