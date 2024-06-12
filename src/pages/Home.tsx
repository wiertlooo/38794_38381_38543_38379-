import React, { useState } from "react";
import RecipeComponent from "./components/RecipeComponent";

type Type = "BREAKFAST" | "DINNER" | "LUNCH";

const Home: React.FC = () => {
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);
    const [typeProp, setTypeProp] = useState<Type | undefined>(undefined);

    const handleBreakfastClick = () => {
        setTypeProp("BREAKFAST");
        setButtonClicked(true);
    };

    const handleDinnerClick = () => {
        setTypeProp("DINNER");
        setButtonClicked(true);
    };

    const handleLunchClick = () => {
        setTypeProp("LUNCH");
        setButtonClicked(true);
    };

    return (
        <div className="wrapper">
            <h1>Przepis na...</h1>
            <div className="btn-container">
                <button className="btn" onClick={handleBreakfastClick}>
                    Śniadanie
                </button>
                <button className="btn" onClick={handleDinnerClick}>
                    Obiad
                </button>
                <button className="btn" onClick={handleLunchClick}>
                    Kolację
                </button>
                <button className="btn">Deser</button>
            </div>
            {buttonClicked && <RecipeComponent type={typeProp} />}
            <div id="recipe-container">
                <h2>Zieloną fantazję</h2>
                <div className="two-column">
                    <div className="col-left">
                        <h3>Składniki:</h3>
                        <ul>
                            <li>eggs: 4</li>
                            <li>maple breakfast sausage links: 8</li>
                            <li>milk: 100ml</li>
                            <li>flour: 100g</li>
                        </ul>
                    </div>
                    <div className="col-right">
                        <img
                            src="https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl_127032-1996.jpg?w=826&t=st=1718193180~exp=1718193780~hmac=717bd059b95c2ef7590d69d59b0d903b7599751e0c627e55b32b2cc037f86c5d"
                            alt={`recipe.name`}
                        />
                    </div>
                </div>

                <h2>Instrukcja:</h2>
                <p>
                    Preheat oven to 220°C. Arrange sausages in a baking dish.
                    Mix milk, eggs, and flour to form a batter. Pour over
                    sausages and bake until puffed and golden.
                </p>
            </div>
        </div>
    );
};

export default Home;
