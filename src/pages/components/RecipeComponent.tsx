import { Recipe } from "../../recipe";
import { useFetchRecipeQuery } from "../../store";

type RecipeComponentProps = {
    type: undefined | "BREAKFAST" | "DINNER" | "LUNCH";
};

type ComponentEntry = [string, string];

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

    const recipe: Recipe = data;

    // Transformacja obiektu components na tablicę par [klucz, wartość]
    const componentsArray: ComponentEntry[] = Object.entries(
        recipe.components
    ).map(([key, value]) => [key, value as unknown as string]);

    const componentsList = componentsArray.map(([key, value], index) => (
        <li key={index}>
            {key.charAt(0).toUpperCase() + key.slice(1)} - {value}
        </li>
    ));

    return (
        <div id="recipe-container">
            <h2>{recipe.name}</h2>
            <img
                style={{ width: 500 }}
                src={recipe.imageURL}
                alt={recipe.name}
            />
            <h2>Ingredients:</h2>
            <ul>{componentsList}</ul>
            <h2>Instructions:</h2>
            <p>{recipe.instruction}</p>
        </div>
    );
};

export default RecipeComponent;
