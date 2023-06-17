  // eslint-disable-next-line react/prop-types
 /* export default function  Button({ onClick, type, id, text }) {
    return (
      <button className="buttons" onClick={onClick} type={type} id={id} >{text}</button>
    );
  }; */
 
const Button = ({ className= "", onClick, type = "button", id = "", text = "Button" }) => (
  <button className={className} onClick={onClick} type={type} id={id}>
    {text}
  </button>
);

export default Button;


  // export default Button