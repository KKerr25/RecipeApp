import Classes from "./AvalibleRecipes.module.css";
import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem/RecipeItem.jsx";
import Card from "../UI/Card.jsx";
import AddButton from "../Layout/AddButton.jsx";

const AvalibleRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchRecpies = async () => {
      try {
        const response = await fetch(
          "https://recipeapp-19652-default-rtdb.firebaseio.com/Recipie.json"
        );

        const responseData = await response.json();

        const loadedRecipes = [];

        for (const key in responseData) {
          loadedRecipes.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            time: responseData[key].time,
            ingridients: responseData[key].ingridients,
          });
        }

        setRecipes(loadedRecipes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
    fetchRecpies();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={Classes.RecipeIsLoading}>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className={Classes.RecipesError}>{httpError}</p>
      </section>
    );
  }

  const recipeList = recipes.map((recipe) => (
    <RecipeItem
      id={recipe.id}
      key={recipe.id}
      name={recipe.name}
      description={recipe.description}
      time={recipe.time}
      ingridients={recipe.ingridients}
    />
  ));

  return (
    <section className={Classes.recipes}>
      <Card>
        <ul>{recipeList}</ul>
      </Card>
    </section>
  );
};

export default AvalibleRecipes;
