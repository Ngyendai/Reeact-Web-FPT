import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { DataContext } from "../../../assets/fake-data/Products/data-proMoblet";
import numberWithCommas from "../../../utils/numberWithCommas";
import { BiChip } from "react-icons/bi";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";

const ProMoblet = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  return (
    <div className="container_Products_Sales">
      <h3>ĐIỆN THOẠI DI ĐỘNG</h3>
      <div className="product-card" id="height">
        {products.map(product => (
          <div
            className="product-card__box"
            key={product._id}
            id="height__products__moblet"
          >
            <Link to={`/dien-thoai/${product._id}`}>
              <div className="product-card__image">
                <img src={product.images} alt="" />
                <div className="product-card__image__des">
                  <p className="product-card__image__des__ora">
                    {product.installment}
                  </p>

                  <p className="product-card__image__des__red">
                    {product.sale}
                  </p>
                </div>
              </div>
              <div className="product-card__des">
                <h3 className="product-card__des__name">{product.title}</h3>
                <div className="product-card__des__price">
                  {numberWithCommas(product.price)}
                  <span className="product-card__des__old">
                    <del> {product.del}</del>
                  </span>
                </div>

                <div className="product-card__des__ipays">
                  <div className="product-card__des__infomation">
                    <div className="propduct-card__des__infomation__items">
                      <span>
                        <BiChip />
                      </span>
                      <p>{product.cpu}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>
                        <MdScreenShare />
                      </span>
                      <p>{product.screen}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>
                        <FaMicrochip />
                      </span>
                      <p>{product.ram}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>
                        <FaHdd />
                      </span>
                      <p>{product.rom}</p>
                    </div>

                    <div className="propduct-card__des__infomation__items">
                      <span>
                        <FaWeightHanging />
                      </span>
                      <p>{product.weight}</p>
                    </div>
                  </div>
                  <div className="product-card__des__ipay">
                    <img
                      src={product.imgpay1}
                      alt=""
                      className="ipay__cricle"
                    />
                    <img
                      src={product.imgpay2}
                      alt=""
                      className="ipay__cricle"
                    />
                    <img
                      src={product.imgpay3}
                      alt=""
                      className="ipay__cricle"
                    />
                  </div>
                  <div className="product-card__des__ipay__content">
                    <p>{product.content}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProMoblet;
