import "./button.css";

// const Button = (props) => {
//   console.log(props);
//   return (
//     <button className="btn" type={props.type}>
//       {props.text}
//     </button>
//   );
// };

const Button = ({ text, type }) => {
  //   console.log(props);
  console.log(text);
  return (
    <button className="btn" type={type}>
      {text}
    </button>
  );
};
export default Button;
