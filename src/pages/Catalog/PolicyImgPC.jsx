import React from 'react';
import img1 from "../../images/pc/nc1.png";
import img2 from "../../images/pc/nc2.png";
import img3 from "../../images/pc/nc3.png";
import img4 from "../../images/pc/nc4.png";
import img5 from "../../images/pc/nc5.png";
const PolicyImgPC = () => {

    const dataImgLaptop = [
        {
            id: "1",
            images: img1,
            title: "PC GAMING"
        },
        {
            id: "2",
            images: img2,
            title: "PC VĂN PHÒNG"
        },
        {
            id: "3",
            images: img3,
            title: "PC ĐỒ HỌA"
        },
        {
            id: "4",
            images: img4,
            title: "PC RENDER 3D"
        },
        {
            id: "5",
            images: img5,
            title: "LINH KIỆN & PHỤ KIỆN MÁY TÍNH"
        },
    ]
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


    )
}

export default PolicyImgPC;