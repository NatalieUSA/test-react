import PropTypes from "prop-types";
import { Recipe } from "../Recipe/Recipe";
import { List, ListItem } from "./RecipeList.styled";

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItem key={item.id} style={{ listStyle: "none" }}>
            <Recipe item={item} />
          </ListItem>
        );
      })}
    </List>
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
