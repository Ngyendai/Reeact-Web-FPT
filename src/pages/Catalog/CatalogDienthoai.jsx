import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import datacataloglSlider from "../../assets/fake-data/Products/data-catalog-slider";
import {
  DataContext,
  DataProMoblet,
} from "../../assets/fake-data/Products/data-proMoblet";
import ProMoblet from "../../component/FE/Products/ProMoblet";
import numberWithCommas from "../../utils/numberWithCommas";
import BtnModalSlider from "../Products/BtnModalSlider";
import BrnCatalogSlider from "./BtnCatalogSlider";
import SliderMoblet from "./SliderMoblet";
import { BiChip } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { CgCreditCard } from "react-icons/cg";
import Helmet from "../../component/FE/Helmet";
const Catalogdienthoai = () => {
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
    <Helmet title="Điện thoại smartphone chính hãng">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Điện thoại
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
                    src={process.env.PUBLIC_URL + `/Imgs/dt${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BrnCatalogSlider moveSlide={nextSlide} direction={"next"} />
            <BrnCatalogSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots container__catalog_dots">
              {Array.from({ length: 10 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="container__catalog__boxs">
          <div className="container__catalog__box">
            <div className="container__catalog__box__filter">
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Hãng sản xuất</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Apple (iPhone)</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Samsung</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>OPPO</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Xiaomi</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Vivo</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Realmi</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Vsmart</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Nokia</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Masstel</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Mức giá</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Dưới 2 triệu</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Từ 2 - 4 triệu</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 4 - 7 triệu</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 7 - 13 triệu</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 13 triệu</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Tính năng đặc biệt</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Bảo mật vân tay</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Nhận diện khuôn mặt</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Chống nước & Bụi</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Sạc nhanh</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Dung lượng PIN</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Apple (iPhone)</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Dưới 3000 mah</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 3000 - 4000 mha</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Siêu trâu: trên 4000mha</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Dung lượng PIN</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Màn hình nhỏ: duới 5.0 inch</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Nhỏ gọn vừa tay: dưới 6.0 inch, tràn viền</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 6.0 inch</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Màn hình gập</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Camera</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Quay phim slow motion</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Ai Camera</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Chụp 3d</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Hiệu ứng làm đẹp</span>
                      <small>(3)</small>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Zoom quang học</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Trả góp ưu đãi</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                      <small>(10)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0%</span>
                      <small>(7)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0đ</span>
                      <small>(3)</small>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0%/0đ</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container__catalog__box__product">
              <div className="container__catalog__box__product__title">
                <h3>
                  Điện thoại <span>(321 sản phẩm)</span>
                </h3>
              </div>
              <div>
                <SliderMoblet />
              </div>
              <div className="container__catalog__box__product__filter">
                <div className="container__catalog__box__product__filter__left">
                  <div className="container__catalog__box__product__filter__left__title">
                    <p>Ưu tiên xem:</p>
                  </div>
                  <div className="container__catalog__box__product__filter__left__btn">
                    <button className="active">Bán chạy nhất</button>
                    <button>Trả góp %</button>
                    <button>Gía thấp</button>
                    <button>Gía cao</button>
                    <button>Ưu đãi online</button>
                  </div>
                </div>
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
                <div className="product-card" id="height__products_moblet">
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
                {/* moblet */}
                {show ? (
                  <div>
                    <div className="product-card" id="border_bottom">
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
                ) : null}
              </div>
            </div>
          </div>
          <button onClick={() => setShow(!show)} className="add__products">
            {show ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalogdienthoai;
