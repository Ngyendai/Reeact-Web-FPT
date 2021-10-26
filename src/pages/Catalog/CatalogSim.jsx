import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../component/FE/Helmet";
const CatalogSim = () => {
    return (
      <Helmet title="Mua sim số đẹp, thẻ cào, thẻ game">
        <div className="container__catalog">
          <div className="container__catalog__title">
            <p>
              <span>
                <Link>Trang chủ </Link>
              </span>
              / Sim & Thẻ nhớ
            </p>
          </div>

          <div className="container__catalog__box" id="height">
            <h2>Đang cập nhật</h2>
          </div>
        </div>
      </Helmet>
    );
};

export default CatalogSim;
