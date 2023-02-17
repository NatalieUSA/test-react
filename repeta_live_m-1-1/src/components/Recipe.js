import {
  BsFillAlarmFill,
  BsPeopleFill,
  BsFillCalculatorFill,
} from "react-icons/bs";

export const Recipe = ({
  item: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",

        width: 300,
      }}
    >
      <img src={image} alt={name} width="300" />
      <h2
        style={{
          backgroundColor: "lightgrey",
          fontSize: 18,
          color: "deeppink",
          width: 240,
        }}
      >
        {name}
      </h2>

      <div style={{ display: "flex", gap: 5 }}>
        <div styles={{ display: "flex", gap: 5 }}>
          <BsFillAlarmFill />
          {time} min
        </div>

        <div styles={{ display: "flex", gap: 5 }}>
          <BsPeopleFill />
          {servings} servings
        </div>

        <div styles={{ display: "flex", gap: 5 }}>
          <BsFillCalculatorFill />
          {calories} calories
        </div>
      </div>

      <div>
        <span>easy</span>
        <span>medium</span>
        <span>hard</span>
      </div>
    </div>
  );
};


