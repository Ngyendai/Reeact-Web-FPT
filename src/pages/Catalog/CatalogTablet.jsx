import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { DataContext } from "../../assets/fake-data/Products/data-Tablet";
import numberWithCommas from "../../utils/numberWithCommas";
import BtnCatalogSlider from "./BtnCatalogSlider";
import SliderTablet from "./SliderTablet";
import { v4 as uuidv4 } from "uuid";
import { BiChip } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMicrochip, FaHdd, FaBatteryFull } from "react-icons/fa";
import Helmet from "../../component/FE/Helmet";

const CatalogTablet = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState(false);
  const nextSlide = () => {
    if (slideIndex !== datacatalogsliderTablet.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === datacatalogsliderTablet.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(datacatalogsliderTablet.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  const datacatalogsliderTablet = [
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
  ];
  return (
    <Helmet title="Tablet | Máy tính bảng giá rẻ chính hãng">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Máy tính bảng
          </p>
        </div>
        <div className="container__catalog__slider">
          <div className="container__catalog__slider__img">
            {datacatalogsliderTablet.map((obj, index) => {
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
                    src={process.env.PUBLIC_URL + `/Imgs/tb${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BtnCatalogSlider moveSlide={nextSlide} direction={"next"} />
            <BtnCatalogSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots container__catalog_dots">
              {Array.from({ length: 3 }).map((item, index) => (
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
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Apple (iPad)</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Samsung </span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Masstel</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Lenovo</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>HP</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Xiaomi</span>
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
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Dưới 2 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Từ 2 - 5 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 5 - 8 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 8 triệu</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Dung lượng</h3>
                </div>
                <ul className="container__catalog__box__filter__item1__content">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Tất cả</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Dưới 4 gb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Từ 64 - 256 gb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 256 gb</span>
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
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0%</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0đ</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trả góp 0%/0đ</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container__catalog__box__product" id="width">
              <div className="container__catalog__box__product__title">
                <h3>
                  Máy tính bảng <span>(27 sản phẩm)</span>
                </h3>
              </div>
              <div>
                <SliderTablet />
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
              <div className="container_Products_Sales">
                <div className="product-card" id="height__tablet">
                  {products.map(product => (
                    <div
                      className="product-card__box"
                      id="height__product__tablet"
                    >
                      <Link to={`/may-tinh-bang/${product._id}`}>
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
                                  <IoIosPhonePortrait />
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
                                  <FaBatteryFull />
                                </span>
                                <p>{product.pin}</p>
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
                {show ? (
                  <div className="product-card">
                    {products.map(product => (
                      <div
                        className="product-card__box"
                        id="height__product__tablet"
                      >
                        <Link to={`/may-tinh-bang/${product._id}`}>
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
                                    <IoIosPhonePortrait />
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
                                    <FaBatteryFull />
                                  </span>
                                  <p>{product.pin}</p>
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

export default CatalogTablet;
