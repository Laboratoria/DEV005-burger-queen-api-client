// eslint-disable-next-line react/prop-types
export default function  Button({ className, onClick, type, id, text }) {
    return (
      <button className={className} onClick={onClick} type={type} id={id} >{text}</button>
    );
  }
 