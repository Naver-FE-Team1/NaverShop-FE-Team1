import "./subscribeForm.scss";
import Button from "../../atoms/Button";
const SubscribeForm = () => {
  return (
    <div className="subscribe-form d-flex align-items-center">
      <input type="text" placeholder="your@email.com" />
      <Button padding="16px 32px" txtColor="#fff" bgColor="#2A254B">
        Sign Up
      </Button>
    </div>
  );
};

export default SubscribeForm;
