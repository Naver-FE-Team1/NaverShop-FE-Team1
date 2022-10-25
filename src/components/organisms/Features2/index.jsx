import Feature2TextBlock from "../../molecules/Feature2TextBlock";
import img from "../../../assets/Image Block.png";

const Feature2 = () => {
  return (
    <section className="feature-2" style={{ padding: "32px 24px" }}>
      <Feature2TextBlock />
      <img
        src="https://cmsv2.yame.vn/uploads/1f5a49c4-b35a-4c84-8c7d-ab74e64f9c4d/fix.jpg?quality=80&w=700&h=0"
        alt=""
      />
    </section>
  );
};

export default Feature2;
