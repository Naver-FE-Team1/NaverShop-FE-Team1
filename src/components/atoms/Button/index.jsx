import { margin } from "@mui/system";
import "./customButton.scss";

const Button = (props) => {
  const {
    children,
    width,
    margin,
    bgColor,
    txtColor,
    padding,
    onClick,
    style,
    type,
  } = props;
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
        margin: margin,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
