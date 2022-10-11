import "./customButton.scss";

const Button = (props) => {
  const { children, width, bgColor, txtColor, padding, onClick, style } = props;
  return (
    <button
      className="my-btn"
      onClick={onClick}
      style={{
        width: width,
        background: bgColor,
        color: txtColor,
        padding: padding,
        ...style
      }}
    >
      {children}
    </button>
  );
};

export default Button;
