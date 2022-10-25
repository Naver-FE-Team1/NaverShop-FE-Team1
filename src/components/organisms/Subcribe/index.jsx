import { ReactComponent as Checkmark } from "../../../assets/Checkmark--filled.svg";
import SubscribeForm from "../../molecules/SubscribeForm";

const items = [
  { icon: <Checkmark />, content: "Exclusive offers" },
  { icon: <Checkmark />, content: "Free events" },
  { icon: <Checkmark />, content: "Large discounts" },
];

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__blur"></div>
      <div className="subscribe__content">
        <h3>Join the club and get the benefits</h3>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul style={{ width: "100%" }}>
          {items.map((item, idx) => (
            <li className="d-flex align-items-center" key={idx}>
              {item.icon}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Subscribe;
