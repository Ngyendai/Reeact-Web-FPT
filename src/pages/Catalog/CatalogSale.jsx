import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../component/FE/Helmet";
const CatalogSale = () => {
  return (
    <Helmet title="Khuyến mãi">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Khuyến mãi
          </p>
        </div>

        <div className="container__catalog__box" id="height">
          <h2>Đang cập nhật</h2>
        </div>
      </div>
    </Helmet>
  );
};

export default CatalogSale;
