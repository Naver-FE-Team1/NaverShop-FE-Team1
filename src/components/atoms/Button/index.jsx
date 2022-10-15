import "./customButton.scss";

const Button = (props) => {
  const { children, width, bgColor, txtColor, padding, onClick, style, type } = props;
  return (
    <button
      type={type}
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
