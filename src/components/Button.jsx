

  // eslint-disable-next-line react/prop-types
  export const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>{text}</button>
    );
  };