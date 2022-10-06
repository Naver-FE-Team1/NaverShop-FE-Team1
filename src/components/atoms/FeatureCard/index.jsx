const FeatureCard = (props) => {
  const { children } = props;
  return (
    <article
      style={{
        marginBottom: "26px",
        padding: "36px 24px",
        backgroundColor: "#F9F9F9",
      }}
    >
      {children}
    </article>
  );
};

export default FeatureCard;
