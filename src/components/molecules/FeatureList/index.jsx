import { ReactComponent as Delivery } from "../../../assets/Delivery.svg";
import { ReactComponent as Sprout } from "../../../assets/Sprout.svg";
import { ReactComponent as Checkmark } from "../../../assets/Checkmark--outline.svg";
import { ReactComponent as Purchase } from "../../../assets/Purchase.svg";
import FeatureCard from "../../atoms/FeatureCard";

const data = [
  {
    icon: <Delivery />,
    title: "Next day as standard",
    content: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: <Checkmark />,
    title: "Made by true artisans",
    content: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: <Purchase />,
    title: "Unbeatable prices",
    content:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    icon: <Sprout />,
    title: "Recycled packaging",
    content: "We use 100% recycled to ensure our footprint is more manageable",
  },
];

const FeatureList = () => {
  return (
    <ul style={{ padding: "0" }} className="feature-list d-flex flex-column">
      {data.map((item, idx) => (
        <FeatureCard key={idx}>
          {item.icon}
          <p
            style={{
              marginBottom: "12px",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "140%",
            }}
          >
            {item.title}
          </p>
          <p
            style={{ fontWeight: "400", fontSize: "16px", lineHeight: "150%" }}
          >
            {item.content}
          </p>
        </FeatureCard>
      ))}
    </ul>
  );
};

export default FeatureList;
