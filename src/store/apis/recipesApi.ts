import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recipe } from "../../recipe";

const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/recipes",
  }),
  endpoints(builder) {
    return {
      fetchRecipe: builder.query<Recipe, string | undefined>({
        query: (recipeType) => ({
          url: `/random?type=${recipeType}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchRecipeQuery } = recipesApi;

export { recipesApi };
