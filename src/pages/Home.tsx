import React, { useState } from "react";
import RecipeComponent from "./components/RecipeComponent";
import { useDispatch } from "react-redux";
import { recipesApi } from "../store/apis/recipesApi";

type Type = "BREAKFAST" | "DINNER" | "LUNCH" | "DESSERT";

const Home: React.FC = () => {
  const [typeProp, setTypeProp] = useState<Type | undefined>(undefined);
  const dispatch = useDispatch();

  const handleClick = (type: Type) => {
    setTypeProp(type);
    dispatch(recipesApi.util.invalidateTags([{ type: "Recipe", id: type }]));
  };

  return (
    <div className="wrapper">
      <h1>Recipe for...</h1>
      <div className="btn-container">
        <button
          className="btn btn-breakfast"
          onClick={() => handleClick("BREAKFAST")}
        >
          Breakfast
        </button>
        <button
          className="btn btn-dinner"
          onClick={() => handleClick("DINNER")}
        >
          Dinner
        </button>
        <button className="btn btn-supper" onClick={() => handleClick("LUNCH")}>
          Supper
        </button>
        <button
          className="btn btn-dessert"
          onClick={() => handleClick("DESSERT")}
        >
          Dessert
        </button>
      </div>
      {typeProp && <RecipeComponent type={typeProp} />}
    </div>
  );
};

export default Home;
