import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "./apis/recipesApi";

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

setupListeners(store.dispatch);

export const { useFetchRecipeQuery } = recipesApi;
