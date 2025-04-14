import { Recipe } from "./types/Recipes";

type Props = {
  saved: Recipe[];
};

const Saved: React.FC<Props> = ({ saved }) => (
  <div>
    <h2>Saved Recipes</h2>
    {saved.map((recipe) => (
      <div key={recipe.id}>
        <h4>{recipe.title}</h4>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </div>
    ))}
  </div>
);
export default Saved;