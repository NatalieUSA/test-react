import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid deeppink;
  border-radius: 20px;
  padding: 8px;
  width: 300px;
  hight: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h2`
  backgroundcolor: lightgrey;
  font-size: 18px;
  color: deeppink;
  width: 240px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 8px;

  svg {
    color: deppink;
    &::hover {
      color: grey;
    }
  }
`;

export const RecipeDificulty = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

// export const Badge = styled.span`
//   padding: 8px 16px;
//   border: 1px solid deeppink;
//   border-radius: 20px;
//   background-color: ${(props) => {
//     return props.isActive ? "deppink" : "grey";
//   }};
//   color: ${(props) => {
//     return props.isActive ? "white" : "deppink";
//   }};
// `;

//easy - green
//medium - blue
//hard - pink

export const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid deeppink;
  border-radius: 20px;
  background-color: ${(props) => {
    if (!props.isActive) {
      return "grey";
    }
    switch (props.value) {
      case "easy":
        return "green";
      case "medium":
        return "blue";
      case "hard":
        return "red";
      default:
        return "white";
    }
  }};
  color: ${(props) => {
    return props.isActive ? "white" : "deppink";
  }};
`;
