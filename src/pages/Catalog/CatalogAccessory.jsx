import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import datacataloglSlider from "../../assets/fake-data/Products/data-catalog-slider";
import { DataContext } from "../../assets/fake-data/Products/data-accessory";
import Accessory from "../../component/FE/Accessory";
import Grid from "../../component/FE/Grid";
import Section, { SectionBody, SectionTitle } from "../../component/FE/Section";
import numberWithCommas from "../../utils/numberWithCommas";
import BtnModalSlider from "../Products/BtnModalSlider";
import BrnCatalogSlider from "./BtnCatalogSlider";
import SliderMoblet from "./SliderMoblet";
import Helmet from "../../component/FE/Helmet";

const CatalogAccessory = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState(false);
  const nextSlide = () => {
    if (slideIndex !== datacataloglSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === datacataloglSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(datacataloglSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };
  return (
    <Helmet title="Phụ kiện điện thoại, tablet, laptop">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / phụ kiện
          </p>
        </div>
        <div className="container__catalog__slider">
          <div className="container__catalog__slider__img">
            {datacataloglSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1
                      ? "slide__catalog active-anim"
                      : "slide__catalog"
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + `/Imgs/as${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BrnCatalogSlider moveSlide={nextSlide} direction={"next"} />
            <BrnCatalogSlider moveSlide={prevSlide} direction={"prev"} />

            <div
              className="container-dots container__catalog_dots"
              id="margin__top__apple"
            >
              {Array.from({ length: 10 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <Section>
          <SectionTitle>
            <div className="section__title">
              <h4 className="center">PHỤ KIỆN</h4>
            </div>
          </SectionTitle>
          {/*Bước 2*/}
          <SectionBody className="accessory">
            <Grid col={4} mdCol={2} smCol={1} gap={0}>
              <Accessory />
            </Grid>
          </SectionBody>
        </Section>
        <div className="container__catalog__boxs">
          <div className="container__catalog__box">
            <div className="container__catalog__box__product" id="width">
              <div
                className="container__catalog__box__product__filter"
                id="right"
              >
                <div className="container__catalog__box__product__filter__right">
                  <form action="">
                    <div class="item">
                      <select name="sort-by" id="sort-by">
                        <option value="title" selected="selected">
                          Bán chạy nhất
                        </option>
                        <option value="number">Price</option>
                        <option value="search_api_relevance">Relevance</option>
                        <option value="created">Newness</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="container_Products_Sales" id="box_shadown">
                <div className="product-card">
                  {products.map(product => (
                    <div className="product-card__box" id="width__products_acc">
                      <Link to={`/phu-kien/${product._id}`}>
                        <div className="product-card__image">
                          <img src={product.images} alt="" />
                        </div>
                        <div className="product-card__des">
                          <h3 className="product-card__des__name">
                            {product.title}
                          </h3>
                          <p>{product.text}</p>
                          <div className="product-card__des__price">
                            {numberWithCommas(product.price)}
                            <span className="product-card__des__old">
                              <del> {product.del}</del>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {show ? (
                  <div className="product-card">
                    {products.map(product => (
                      <div className="product-card__box">
                        <Link to={`/phu-kien/${product._id}`}>
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
                            <h3 className="product-card__des__name">
                              {product.title}
                            </h3>
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
                                  src={product.pay01}
                                  alt=""
                                  className="ipay__cricle"
                                />
                                <img
                                  src={product.pay02}
                                  alt=""
                                  className="ipay__cricle"
                                />
                                <img
                                  src={product.pay03}
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
                ) : null}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="add__products"
            id="ml__button"
          >
            {show ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </Helmet>
  );
};

export default CatalogAccessory;
