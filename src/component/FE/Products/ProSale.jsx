import React, { useContext } from "react";
import { DataContext } from "../../../assets/fake-data/Products/data-ProSale";
import { Link } from "react-router-dom";
import numberWithCommas from "../../../utils/numberWithCommas";

const ProSale = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="container_Products_Sales">
      <h3>KHUYẾN MÃI</h3>
      <div className="product-card">
        {products.map(product => (
          <div
            className="product-card__box"
            key={product._id}
            id="height__products__sale"
          >
            <Link to={`/san-pham/${product._id}`}>
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
                      <span>{product.iconcpu}</span>
                      <p>{product.cpu}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>{product.iconscrenn}</span>
                      <p>{product.screen}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>{product.iconsram}</span>
                      <p>{product.ram}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>{product.iconsrom}</span>
                      <p>{product.rom}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>{product.iconscard}</span>
                      <p>{product.card}</p>
                    </div>
                    <div className="propduct-card__des__infomation__items">
                      <span>{product.iconsweight}</span>
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

export default ProSale;
