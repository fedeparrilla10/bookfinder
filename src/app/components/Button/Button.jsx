import './Button.css';

const Button = ({ name, handleClick, params }) => {
  const onClick = params ? () => handleClick(params) : handleClick;
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
