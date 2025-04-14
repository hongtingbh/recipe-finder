import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';
import Saved from './Saved';
import { Recipe } from "./types/Recipes";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [saved, setSaved] = useState<Recipe[]>([]);

  const fetchRecipes = async (query: string) => {
    const API_KEY = "ae5f1209c8cf4000ba8b95535b69a31a";
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=10&apiKey=${API_KEY}`
      );
      const data = await res.json();
      const recipes: Recipe[] = data.results.map((item: any) => ({
        id: item.id.toString(),
        title: item.title,
        image: item.image,
        url: `https://spoonacular.com/recipes/${item.title.toLowerCase().replace(/ /g, "-")}-${item.id}`,
      }));
      setRecipes(recipes);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    }
  };

  const saveRecipe = (recipe: Recipe) => {
    setSaved((prev) => [...prev, recipe]);
  };

  return (
    <div>
      <Search onSearch={fetchRecipes} />
      <Results results={recipes} onSave={saveRecipe} />
      <Saved saved={saved} />
    </div>
  );
};

export default App;