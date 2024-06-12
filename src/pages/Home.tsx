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
            <h1>AEH TOP PROJEKT</h1>
            <button onClick={handleBreakfastClick}>BREAKFAST</button>
            <button onClick={handleDinnerClick}>DINNER</button>
            <button onClick={handleLunchClick}>LUNCH</button>
            <button>DESSERT</button>
            {buttonClicked && <RecipeComponent type={typeProp} />}
        </div>
    );
};

export default Home;
