import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
/* Bước 2*/
import numberWithCommas from "../../utils/numberWithCommas";

const ProductCard = props => {
  return (
    /* Bước 3*/
    <div className="product-card">
      <Link to={`/san-pham/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <div className="product-card__image__des">
            <p className="product-card__image__des__ora">{props.installment}</p>

            <p className="product-card__image__des__red">{props.sale}</p>
          </div>
        </div>
        <div className="product-card__des">
          <h3 className="product-card__des__name">{props.name}</h3>
          <div className="product-card__des__price">
            {numberWithCommas(props.price)}
            <span className="product-card__des__old">
              <del> {props.del}</del>
            </span>
          </div>

          <div className="product-card__des__ipays">
            <div className="product-card__des__infomation">
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconcpu}</span>
                <p>{props.cpu}</p>
              </div>
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconscrenn}</span>
                <p>{props.screen}</p>
              </div>
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconsram}</span>
                <p>{props.ram}</p>
              </div>
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconsrom}</span>
                <p>{props.rom}</p>
              </div>
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconscard}</span>
                <p>{props.card}</p>
              </div>
              <div className="propduct-card__des__infomation__items">
                <span>{props.iconsweight}</span>
                <p>{props.weight}</p>
              </div>
            </div>
            <div className="product-card__des__ipay">
              <img src={props.pay01} alt="" className="ipay__cricle" />
              <img src={props.pay02} alt="" className="ipay__cricle" />
              <img src={props.pay03} alt="" className="ipay__cricle" />
            </div>
            <div className="product-card__des__ipay__content">
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

/* Bước 1*/
ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  pay01: PropTypes.string.isRequired,
  pay02: PropTypes.string.isRequired,
  pay03: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  installment: PropTypes.string.isRequired,
  cpu: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  rom: PropTypes.string.isRequired,
  iconcpu: PropTypes.string.isRequired,
  iconscrenn: PropTypes.string.isRequired,
  iconsram: PropTypes.string.isRequired,
  iconsrom: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  iconscard: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  iconsweight: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  del: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
