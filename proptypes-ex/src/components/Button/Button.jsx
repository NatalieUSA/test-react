import "./button.css";

// const Button = (props) => {
//   console.log(props);
//   return (
//     <button className="btn" type={props.type}>
//       {props.text}
//     </button>
//   );
// };

const Button = ({ text, type, active }) => {
  //   console.log(props);
  console.log(text);
  //const fullClassName = active ? "btn active" : "btn";
  return (
    // <button className="btn" className={fullClassName} type={type}>
    //   {text}
    // </button>
    <button className={`btn ${active ? "active" : ""}`} type={type}>
      {text}
    </button>
  );
};
export default Button;
