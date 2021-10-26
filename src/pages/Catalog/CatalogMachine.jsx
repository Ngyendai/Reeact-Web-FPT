import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../component/FE/Helmet";
const CatalogMachine = () => {
  return (
    <Helmet title="Máy cũ giá rẻ">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Máy cũ giá rẻ
          </p>
        </div>

        <div className="container__catalog__box" id="height">
          <h2>Đang cập nhật</h2>
        </div>
      </div>
    </Helmet>
  );
};

export default CatalogMachine;
