import {useState,useEffect} from "react";
import "../SubImage/subImage.scss";
const SubImage = ({ data}) => {
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
    <div className="subImage" style={{ padding: "15px" }}>
      <img
        style={{
          cursor: "pointer",
          height: "160px",
          maxWidth: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        src={data.src}
        alt={data.alt}
      />
    </div>
  );
};

export default SubImage;
