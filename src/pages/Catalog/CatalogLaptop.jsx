import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import datacataloglSlider from "../../assets/fake-data/Products/data-catalog-slider";
import { DataContext } from "../../assets/fake-data/Products/data-Laptop";
import numberWithCommas from "../../utils/numberWithCommas";
import BtnCatalogSlider from "./BtnCatalogSlider";
import PolicyImgLaptop from "./PolicyImgLaptop";
import SliderLaptop from "./SliderLaptop";
import { v4 as uuidv4 } from "uuid";
import { BiChip } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { CgCreditCard } from "react-icons/cg";
import Helmet from "../../component/FE/Helmet";
const CatalogLaptop = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState(false);
  const nextSlide = () => {
    if (slideIndex !== datacatalogsliderlaptop.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === datacatalogsliderlaptop.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(datacatalogsliderlaptop.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  const datacatalogsliderlaptop = [
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
    {
      id: uuidv4(),
    },
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
    <Helmet title="Laptop | Máy tính xách tay chính hãng">
      <div className="container__catalog">
        <div className="container__catalog__title">
          <p>
            <span>
              <Link>Trang chủ </Link>
            </span>
            / Laptop
          </p>
        </div>
        <div className="container__catalog__slider">
          <div className="container__catalog__slider__img">
            {datacatalogsliderlaptop.map((obj, index) => {
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
                    src={process.env.PUBLIC_URL + `/Imgs/lp${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BtnCatalogSlider moveSlide={nextSlide} direction={"next"} />
            <BtnCatalogSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots container__catalog_dots">
              {Array.from({ length: 16 }).map((item, index) => (
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
                      <span>Apple (Macbook)</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Asus</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Dell</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Acer</span>
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
                      <span>Lenovo</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Microsoft (Surface)</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>MSI</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Avita</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Gigabyte</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Fujitsu</span>
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
                      <span>Từ 20 - 25 triệu</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 25 triệu</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Màn hình</h3>
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
                      <span>Bảo mật vân tay</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span> Khoảng 13 inch</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Khoảng 14 inch</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Trên 15 inch</span>
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
                      <span>Apple (iPhone)</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel celeron</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Intel pentium</span>
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
                      <span>Intel core i9</span>
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
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Amd ryzen 7</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Amd ryzen 9</span>
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
                      <span>Nvidia geforce series</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Amd radeon series</span>
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
                  <h3>Ổ cứng</h3>
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
                      <span>Hdd 1 tb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Ssd 1 tb</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Ssd 512 gb</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Ssd 256 gb</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Ssd 128 gb</span>
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
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Hỗ trợ công nghệ optane</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Cpu intel 10th</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Sử dụng tấm nền ips</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Màn hình cảm ứng</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Windows bản quyền</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Mở khóa vân tay</span>
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
                      <span>Doanh nhân</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Mỏng nhẹ</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Sinh viên</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Văn phòng</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Gaming đồ họa</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="container__catalog__box__filter__item1">
                <div className="container__catalog__box__filter__item1__title">
                  <h3>Laptop khuyến mãi</h3>
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
                      <span>Khuyến mãi ngày vàng</span>
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span>Giá online</span>
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

            <div
              className="container__catalog__box__product"
              id="height_poducts"
            >
              <div className="container__catalog__box__product__title">
                <h3>
                  Laptop <span>(151 sản phẩm)</span>
                </h3>
              </div>
              <div>
                <SliderLaptop />
              </div>
              <div>
                <PolicyImgLaptop />
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
                <div className="product-card" id="height__laptop">
                  {products.map(product => (
                    <div
                      className="product-card__box"
                      id="height__products__laptop"
                    >
                      <Link to={`/lap-top/${product._id}`}>
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
                {show ? (
                  <div className="product-card">
                    {products.map(product => (
                      <div
                        className="product-card__box"
                        id="height__products__laptop"
                      >
                        <Link to={`/lap-top/${product._id}`}>
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
                ) : null}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="add__products"
            id="magin_top_button"
          >
            {show ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </Helmet>
  );
};

export default CatalogLaptop;
