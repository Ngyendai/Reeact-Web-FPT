import React from "react";
import img1 from "../../images/laptop/nc1.jpg";
import img2 from "../../images/laptop/nc2.jpg";
import img3 from "../../images/laptop/nc3.jpg";
import img4 from "../../images/laptop/nc4.jpg";
import img5 from "../../images/laptop/nc5.jpg";
const PolicyImgLaptop = () => {
  const dataImgLaptop = [
    {
      id: "1",
      images: img1,
      title: "Doanh nhân",
    },
    {
      id: "2",
      images: img2,
      title: "Mỏng nhẹ",
    },
    {
      id: "3",
      images: img3,
      title: "Sinh viên",
    },
    {
      id: "4",
      images: img4,
      title: "Văn phòng",
    },
    {
      id: "5",
      images: img5,
      title: "Gaming đồ họa",
    },
  ];
  return (
    <div className="container__policy">
      {dataImgLaptop.map(item => (
        <div className="container__policy__box" key={item.id}>
          <div className="container__policy__box__img">
            <img src={item.images} />
          </div>
          <div className="container__policy__box__des">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicyImgLaptop;
