import React from "react";
import { useFetchRecipeQuery } from "../../store";

interface RecipeComponentProps {
    type: "BREAKFAST" | "DINNER" | "LUNCH" | "DESSERT";
}

const RecipeComponent: React.FC<RecipeComponentProps> = ({ type }) => {
    const { data, error, isLoading } = useFetchRecipeQuery(type);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading recipe.</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    const recipe = data;

    // Transformacja obiektu components na tablicę par [klucz, wartość]
    const componentsArray = Object.entries(recipe.components).map(
        ([key, value]) => [key, value as unknown as string]
    );

    const componentsList = componentsArray.map(([key, value], index) => (
        <li key={index}>
            {key.charAt(0).toUpperCase() + key.slice(1)} - {value}
        </li>
    ));

    return (
        <div id="recipe-container">
            <div className="two-column">
                <div className="col-left">
                    <h2>{recipe.name}</h2>
                    <ul>{componentsList}</ul>
                </div>
                <div className="col-right">
                    <img src={recipe.imageURL} alt={recipe.name} />
                </div>
            </div>
            <h2>Instructions:</h2>
            <p>{recipe.instruction}</p>
        </div>
    );
};

export default RecipeComponent;
