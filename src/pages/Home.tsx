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
        dispatch(
            recipesApi.util.invalidateTags([{ type: "Recipe", id: type }])
        );
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
                <button
                    className="btn btn-supper"
                    onClick={() => handleClick("LUNCH")}
                >
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
            <div id="recipe-container">
                <div className="two-column">
                    <div className="col-left">
                        <h2>Green fantasy</h2>
                        <ul>
                            <li>eggs - 4</li>
                            <li>maple breakfast sausage links - 8</li>
                            <li>milk - 100ml</li>
                            <li>flour - 100g</li>
                            <li>eggs - 4</li>
                            <li>maple breakfast sausage links - 8</li>
                            <li>milk - 100ml</li>
                            <li>flour - 100g</li>
                            <li>eggs - 4</li>
                            <li>maple breakfast sausage links - 8</li>
                            <li>milk - 100ml</li>
                            <li>flour - 100g</li>
                        </ul>
                    </div>
                    <div className="col-right">
                        <div className="img-wrap">
                            <img
                                // src="https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl_127032-1996.jpg?w=826&t=st=1718193180~exp=1718193780~hmac=717bd059b95c2ef7590d69d59b0d903b7599751e0c627e55b32b2cc037f86c5d"
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Chicken-Fajitas-7.jpg"
                                alt={`recipe.name`}
                            />
                        </div>
                    </div>
                </div>
                <h2>Instruction</h2>
                <p>
                    Preheat oven to 220°C. Arrange sausages in a baking dish.
                    Mix milk, eggs, and flour to form a batter. Pour over
                    sausages and bake until puffed and golden. Preheat oven to
                    220°C. Arrange sausages in a baking dish. Mix milk, eggs,
                    and flour to form a batter. Pour over sausages and bake
                    until puffed and golden. Preheat oven to 220°C. Arrange
                    sausages in a baking dish. Mix milk, eggs, and flour to form
                    a batter. Pour over sausages and bake until puffed and
                    golden.
                </p>
            </div>
        </div>
    );
};

export default Home;
