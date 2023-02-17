import {
  BsFillAlarmFill,
  BsPeopleFill,
  BsFillCalculatorFill,
} from "react-icons/bs";
import {
  Container,
  Image,
  Title,
  RecipeInfo,
  RecipeDificulty,
  BadgeList,
  Badge,
} from "../Recipe/Recipe.styled";

export const Recipe = ({
  item: { name, image, time, servings, calories = 1, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>

      <RecipeInfo>
        <RecipeInfo>
          <BsFillAlarmFill />
          {time} min
        </RecipeInfo>

        <RecipeInfo>
          <BsPeopleFill />
          {servings} servings
        </RecipeInfo>

        <RecipeInfo>
          <BsFillCalculatorFill />
          {calories} calories
        </RecipeInfo>
      </RecipeInfo>

      <RecipeDificulty>
        <h3>difficulty</h3>
        <BadgeList>
          <Badge isActive={difficulty === "easy"} value={difficulty}>
            easy
          </Badge>
          <Badge
            isActive={difficulty === "medium" && "ACTIVE"}
            value={difficulty}
          >
            medium
          </Badge>
          <Badge
            isActive={difficulty === "hard" && "ACTIVE"}
            value={difficulty}
          >
            hard
          </Badge>
        </BadgeList>
      </RecipeDificulty>
    </Container>
  );
};
