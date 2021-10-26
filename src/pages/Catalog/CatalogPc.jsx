import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import datacataloglSlider from "../../assets/fake-data/Products/data-catalog-slider";
import { DataContext } from "../../assets/fake-data/Products/data-pc";
import numberWithCommas from "../../utils/numberWithCommas";
import BtnCatalogSlider from "./BtnCatalogSlider";
import PolicyImgPC from "./PolicyImgPC";
import SliderPC from "./SliderPC";
import Grid from "../../component/FE/Grid";
import Section, { SectionBody, SectionTitle } from "../../component/FE/Section";
import PCAccessory from "./Pc-Accessory";
import { v4 as uuidv4 } from "uuid";
import { BiChip } from "react-icons/bi";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { CgCreditCard } from "react-icons/cg";
import Helmet from "../../component/FE/Helmet";
const CatalogPC = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState(false);
  const nextSlide = () => {
    if (slideIndex !== datacatalogsliderPC.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === datacatalogsliderPC.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(datacatalogsliderPC.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };
  const datacatalogsliderPC = [
    {
      id: uuidv4(),
    },
  ];

  return (
    <Helmet title="máy tính để bàn | PC chính hãng">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Máy tính để bàn
          </p>
        </div>
        <div className="container__catalog__slider">
          <div className="container__catalog__slider__img">
            {datacatalogsliderPC.map((obj, index) => {
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
                    src={process.env.PUBLIC_URL + `/Imgs/lk${index + 1}.jpg`}
                  />
                </div>
              );
            })}
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
                      <span>Apple (iMac)</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Apple (Mac mini)</span>
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
                      <span>Asus</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Kiểu dáng thiết kế</h3>
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
                      <span>All In One</span>
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
                      <span>Dưới 10 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Từ 10 - 15 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 15 - 20 triệu</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 20 - 30 triệu</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Từ 30 - 40 triệu</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 40 triệu</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>CPU</h3>
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
                      <span>Intel Celeron/Pentium</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel core i3</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel core i3</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel core i5</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel core i7</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Amd ryzen 3</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Amd ryzen 5</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>RAM</h3>
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
                      <span>4 gb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>8 gb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>16 gb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>32 gb</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Card đồ họa</h3>
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
                      <span>Nvidia geforce</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>AMD Radeon</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Card onboard</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Nhu cầu</h3>
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
                      <span>PC Gaming</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>PC Văn phòng</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>PC Đồ họa</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>PC Render 3D</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container__catalog__box__product" id="width">
              <div className="container__catalog__box__product__title">
                <h3>
                  Máy tính để bàn <span>(23 sản phẩm)</span>
                </h3>
              </div>
              <div>
                <SliderPC />
              </div>
              <div>
                <PolicyImgPC />
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
                <div className="product-card" id="height__pc">
                  {products.map(product => (
                    <div className="product-card__box" id="width__products_pc">
                      <Link to={`/pc/${product._id}`}>
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
                                  <CgCreditCard />
                                </span>
                                <p>{product.card}</p>
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
                        id="width__products_pc"
                      >
                        <Link to={`/pc/${product._id}`}>
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
                                    <CgCreditCard />
                                  </span>
                                  <p>{product.card}</p>
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

        <Section>
          <SectionTitle>
            <div className="section__title">
              <h4>LINH - PHỤ KIỆN MÁY TÍNH</h4>
            </div>
          </SectionTitle>
          {/*Bước 2*/}
          <SectionBody className="accessory">
            <Grid col={4} mdCol={2} smCol={1} gap={0}>
              <PCAccessory />
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default CatalogPC;
