import PropTypes from "prop-types";
import { Recipe } from "./Recipe";
export const RecipeList = ({ items }) => {
  return (
    <ul
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        // width: 240,
      }}
    >
      {items.map((item) => {
        return (
          <li key={item.id} style={{ listStyle: "none" }}>
            <Recipe item={item} />
          </li>
        );
      })}
    </ul>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
  }).isRequired,
};
