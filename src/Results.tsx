import { Recipe } from "./types/Recipes";

type Props = {
  results: Recipe[];
  onSave: (recipe: Recipe) => void;
};

const Results: React.FC<Props> = ({ results, onSave }) => (
  <div>
    {results.map((recipe) => (
      <div key={recipe.id}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} />
        <button onClick={() => onSave(recipe)}>Save</button>
      </div>
    ))}
  </div>
);
export default Results;