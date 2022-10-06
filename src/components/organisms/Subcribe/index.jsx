import { ReactComponent as Checkmark } from "../../../assets/Checkmark--filled.svg";
import SubscribeForm from "../../molecules/SubscribeForm";
import "./subscribe.scss";

const items = [
  { icon: <Checkmark />, content: "Exclusive offers" },
  { icon: <Checkmark />, content: "Free events" },
  { icon: <Checkmark />, content: "Large discounts" },
];

const Subcribe = () => {
  return (
    <section className="subscribe">
      <h3>Join the club and get the benefits</h3>
      <p>
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <ul>
        {items.map((item, idx) => (
          <li className="d-flex align-items-center" key={idx}>
            {item.icon}
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <SubscribeForm />
    </section>
  );
};

export default Subcribe;
