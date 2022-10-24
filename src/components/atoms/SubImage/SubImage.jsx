import { useState, useEffect } from "react";
import "../SubImage/subImage.scss";
const SubImage = ({ data, onClick = () => {} }) => {
  const [active, setActive] = useState(data.id);

  // const handleChangeActive = () => {
  //   const $ = document.querySelector.bind(document);
  //   const $$ = document.querySelectorAll.bind(document);
  //   setActive(data.id)

  //   const subImg = $$('.subImage');
  //   subImg[active].classList.add('active');
  //   $('.subImage.active')?.classList.remove('active');
  // }

  return (
    <div
      onClick={onClick}
      className="subImage"
      style={{ padding: "15px", display: "flex", justifyContent: "center" }}
    >
      <img
        style={{
          cursor: "pointer",
          height: "160px",
          maxWidth: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        src={data}
        alt={data}
      />
    </div>
  );
};

export default SubImage;
