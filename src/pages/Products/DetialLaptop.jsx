import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../assets/fake-data/Products/data-Laptop";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";
import { AiFillStar } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { AiOutlineYoutube, AiFillCaretRight } from "react-icons/ai";
import { Md360 } from "react-icons/md";
import {
  FaMedal,
  FaShippingFast,
  FaMapMarkerAlt,
  FaMicrochip,
  FaHdd,
  FaWeightHanging,
} from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdArrowDropDown, MdScreenShare } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import Modal from "./Modal";
import Modalimg from "./ModalImg";
import Helmet from "../../component/FE/Helmet";

export default function DetailMoblet() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const [cart, setCart] = value.cart;
  const addCart = value.addCart;

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const closeModalHandler = () => setModal(false);
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();
  const [quanlity, setQuanlity] = useState(1);

  const handlerQuanlityc = () => {
    setQuanlity(prevCount => prevCount + 1);
  };
  const handlerQuanlityt = () => {
    setQuanlity(prevCount => prevCount - 1);
  };
  const de = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };
  const reduction = id => {
    cart.forEach(item => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = id => {
    cart.forEach(item => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };
  const [previewImg, setPreviewImg] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {de.map(product => (
        <Helmet title={product.title}>
          <div className="main" key={product._id}>
            <div className="main__container__title">
              <p>Trang ch???</p>/<p>??i???n tho???i</p>/<p>{product.titledetial}</p>
            </div>
            <div className="container__box__information">
              <div className="container__box__information__title">
                <div className="container__box__information__title__left">
                  <h2 title={product.title}>{product.title}</h2>
                </div>
                <div className="container__box__information__title__right">
                  <div className="container__box__information__title__right__star">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="container__box__information__title__right__evaluate">
                    <Link> {product.danhgia}</Link>
                  </div>
                  <div className="container__box__information__title__right__ask">
                    <Link> {product.hoidap}</Link>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div
                className="container__box__information__details"
                key={product.slug}
              >
                <div className="container__box__information__details__left">
                  <div className="container__box__information__details__img">
                    <img src={previewImg} />
                  </div>

                  <div className="container__box__information__details__feature">
                    <ul>
                      <li>
                        <span>
                          <BsImages />
                        </span>
                        <p
                          className="openModalBtn"
                          onClick={() => {
                            setModalOpen(true);
                          }}
                        >
                          {" "}
                          Xem ???nh
                        </p>
                        {modalOpen && <Modalimg setOpenModal={setModalOpen} />}
                      </li>
                      <li>
                        <span>
                          <AiOutlineYoutube />
                        </span>
                        <p>Video tr??n tay</p>
                      </li>
                      <li>
                        <span>
                          <Md360 />
                        </span>
                        <p
                          className="openModalBtn"
                          onClick={() => {
                            setModalOpen(true);
                          }}
                        >
                          ???nh 360 ?????
                        </p>
                        {modalOpen && <Modalimg setOpenModal={setModalOpen} />}
                      </li>
                    </ul>
                  </div>

                  <div className="container__box__information__details__items">
                    <div className="container__box__information__details__item">
                      <p>6.43", FHD+, AMOLED, 1080 x 2400 Pixel</p>
                    </div>
                    <div className="container__box__information__details__item">
                      <p>64.0 MP + 8.0 MP + 2.0 MP</p>
                    </div>
                    <div className="container__box__information__details__item">
                      <p>32.0 MP</p>
                    </div>
                    <div className="container__box__information__details__item">
                      <p>MediaTek Dimensity 900 5G</p>
                    </div>
                    <div className="container__box__information__details__item">
                      <p>128 GB</p>
                    </div>
                    <p>
                      <Link>Xem chi ti???t th??ng s??? k??? thu???t</Link>
                    </p>
                  </div>

                  <div className="container__box__information__details__contents">
                    <div className="container__box__information__details__contents__text">
                      <FaMedal className="text__icon" />
                      <p>H??ng ch??nh h??ng - B???o m???t 12 Th??ng</p>
                    </div>
                    <div className="container__box__information__details__contents__text">
                      <FaShippingFast className="text__icon" />
                      <p>Giao h??ng to??n qu???c</p>
                    </div>
                  </div>
                </div>
                <div className="container__box__information__details__right">
                  <div className="container__box__information__details__right__price">
                    <h3>{numberWithCommas(product.price)}</h3>
                    <p>
                      Tr??? g??p ch??? t??? <b>{product.tragop}</b>th??ng
                    </p>
                  </div>
                  <div className="container__box__information__details__right__img">
                    <div onClick={() => setPreviewImg(product.imagesdetial2)}>
                      <img src={product.imagesdetial2} />
                    </div>

                    <div onClick={() => setPreviewImg(product.imagesdetial3)}>
                      <img src={product.imagesdetial3} />
                    </div>
                  </div>
                  <div className="container__box__information__details__right__des">
                    <div classNam="container__box__information__details__right__des__contents">
                      <p>Nh???n ngay qu?? khuy???n m??i</p>
                    </div>
                    <div classNam="container__box__information__details__right__des__content">
                      <p>
                        <span>
                          <IoMdCheckmarkCircle />
                        </span>
                        {product.saledes1}
                      </p>
                    </div>
                    <div classNam="container__box__information__details__right__des__content">
                      <p>
                        <span>
                          <IoMdCheckmarkCircle />
                        </span>
                        {product.saledes2}
                      </p>
                    </div>
                    <div classNam="container__box__information__details__right__des__content">
                      <p>
                        <span>
                          <IoMdCheckmarkCircle />
                        </span>
                        {product.saledes3}
                      </p>
                    </div>
                    <div classNam="container__box__information__details__right__des__content">
                      <p>
                        <span>
                          <IoMdCheckmarkCircle />
                        </span>
                        {product.saledes4}
                      </p>
                    </div>
                    <div classNam="container__box__information__details__right__des__content">
                      <p>
                        <span>
                          <IoMdCheckmarkCircle />
                        </span>
                        {product.saledes5}
                      </p>
                    </div>
                  </div>
                  <div className="container__box__information__details__right__pays">
                    <div className="container__box__information__details__right__pay">
                      <div className="container__box__information__details__right__pay__img">
                        <img src={product.imgpay2} alt="" />
                        <input type="checkbox" className="checkbox" />
                      </div>
                      <div className="container__box__information__details__right__pay__text">
                        <h3>{product.titlepay2}</h3>
                        <p>{product.textpay2}</p>
                      </div>
                    </div>
                    <div className="container__box__information__details__right__pay">
                      <div className="container__box__information__details__right__pay__img">
                        <img src={product.imgpay3} />
                        <input type="checkbox" className="checkbox" />
                      </div>
                      <div className="container__box__information__details__right__pay__text">
                        <h3>{product.titlepay3}</h3>
                        <p>{product.textpay3}</p>
                      </div>
                    </div>
                  </div>
                  <div className="container__box__information__details__right__carts">
                    <div className="container__box__information__details__right__cart">
                      <button>
                        <Link
                          to="/gio-hang-laptop"
                          className="cart"
                          onClick={() => addCart(product._id)}
                        >
                          <p>MUA NG??Y</p>
                          <span>Giao h??ng mi???n ph?? t???i shop</span>
                        </Link>
                      </button>
                    </div>

                    <div className="container__box__information__details__right__cart__btn">
                      <div className="container__box__information__details__right__cart__btn__left">
                        <button>
                          <Link>
                            <p>Tr??? g??p 0%</p> Duy???t nhanh qua th??? ??i???n tho???i
                          </Link>
                        </button>
                      </div>
                      <div className="container__box__information__details__right__cart__btn__right">
                        <button>
                          <Link>
                            <p>TR??? G??P QUA TH???</p> Visa, Master Card, JCB
                          </Link>
                        </button>
                      </div>
                    </div>

                    <div className="container__box__information__details__right__hotline">
                      <p>
                        G???i
                        <Link> 1800.6601</Link>
                        ????? ???????c t?? v???n mua h??ng (Mi???n ph??)
                      </p>
                      <p className="color__blue">
                        <Link>
                          <FaMapMarkerAlt className="margin_left" />
                          T??m shop c?? h??ng g???n nh???t
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container__box__information__description">
                <div className="container__box__information__description__left">
                  <div className="container__box__information__description__left__text">
                    <h2>{product.text1}</h2>
                    <img src={product.imgtext1} />
                    <h2>{product.text2}</h2>
                    <p>{product.content1}</p>
                    <img src={product.imgtext2} />
                    {show ? <h2>{product.text3}</h2> : null}
                    {show ? <p>{product.content2}</p> : null}
                    {show ? <h2>{product.text4}</h2> : null}
                    {show ? <p>{product.content3}</p> : null}
                    {show ? <img src={product.imgtext3} /> : null}
                    {show ? <h2>{product.text5}</h2> : null}
                    {show ? <p>{product.content4}</p> : null}
                    {show ? <img src={product.imgtext4} /> : null}
                    {show ? <h2>{product.text6}</h2> : null}
                    {show ? <p>{product.content5}</p> : null}
                    {show ? <img src={product.imgtext5} /> : null}
                    {show ? <h2>{product.text7}</h2> : null}
                    {show ? <p>{product.content6}</p> : null}
                    {show ? <img src={product.imgtext6} /> : null}
                    {show ? <h2>{product.text8}</h2> : null}
                    {show ? <p>{product.content7}</p> : null}
                    {show ? <img src={product.imgtext7} /> : null}
                  </div>
                  <button onClick={() => setShow(!show)}>
                    {show ? "Thu g???n" : "Xem th??m"}
                    <MdArrowDropDown />
                  </button>
                </div>

                <div className="container__box__information__description__right">
                  <h2>Th??ng s??? k??? thu???t</h2>
                  <div className="container__box__information__description__right__skills">
                    <div className="container__box__information__description__right__skill">
                      <p>M??n h??nh</p>
                      <p>{product.screentitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>Camera sau</p>
                      <p>{product.cameratitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>Camera Selfie</p>
                      <p>{product.selfietitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>RAM </p>
                      <p>{product.ramtitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>B??? nh??? trong</p>
                      <p>{product.romtitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>CPU</p>
                      <p>{product.cputitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>GPU </p>
                      <p>{product.gputitle}</p>
                    </div>

                    <div className="container__box__information__description__right__skill">
                      <p>Dung l?????ng pin</p>
                      <p>{product.pintitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>Th??? sim</p>
                      <p>{product.simtitle}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>H??? ??i???u h??nh</p>
                      <p>{product.hedieuhanh}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>Xu???t x???</p>
                      <p>{product.xuatxu}</p>
                    </div>
                    <div className="container__box__information__description__right__skill">
                      <p>Th???i gian ra m???t</p>
                      <p>{product.time}</p>
                    </div>
                  </div>
                  <div>
                    {modal ? (
                      <div
                        onClick={closeModalHandler}
                        className="back-drop"
                      ></div>
                    ) : null}
                    <button
                      onClick={() => setModal(true)}
                      className="btn-openModal"
                    >
                      Xem c???u h??nh chi ti???t
                    </button>
                    <Modal modal={modal} close={closeModalHandler} />
                  </div>
                </div>
              </div>

              <div className="container__box__assessments">
                <div className="container__box__assessments__left">
                  <p>
                    ????nh gi?? & Nh???n x??t{product.title} {product.danhgia}
                  </p>
                  <p>????nh gi?? trung b??nh</p>
                  <p>5/5</p>
                  <div className="container__box__assessments__left__star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p className="p">
                    {product.danhgia} & {product.nhanxet}
                  </p>
                </div>
                <div className="container__box__assessments__center">
                  <div className="container__box__assessments__center__item">
                    <p>5</p>
                    <AiFillStar className="color_star" />
                    <div className="container__box__assessments__center__item__bg bg_blue"></div>
                    <p>1</p>
                  </div>
                  <div className="container__box__assessments__center__item">
                    <p>4</p>
                    <AiFillStar className="color_star" />
                    <div className="container__box__assessments__center__item__bg "></div>
                    <p>0</p>
                  </div>
                  <div className="container__box__assessments__center__item">
                    <p>3</p>
                    <AiFillStar className="color_star" />
                    <div className="container__box__assessments__center__item__bg"></div>
                    <p>0</p>
                  </div>
                  <div className="container__box__assessments__center__item">
                    <p>5</p>
                    <AiFillStar className="color_star" />
                    <div className="container__box__assessments__center__item__bg"></div>
                    <p>0</p>
                  </div>
                  <div className="container__box__assessments__center__item">
                    <p>1</p>
                    <AiFillStar className="color_star" />
                    <div className="container__box__assessments__center__item__bg"></div>
                    <p>0</p>
                  </div>
                </div>
                <div className="container__box__assessments__right">
                  <p>B???n ???? d??ng s???n ph???m n??y?</p>
                  <button>
                    <Link>G???i ????nh gi?? c???a b???n</Link>
                  </button>
                </div>
              </div>

              <div className="container__box__question">
                <h3>
                  H???i & ????p v??? {product.title}
                  <button>{product.hoi}</button>
                </h3>

                <div className="container__box__question__input">
                  <textarea
                    rows="3"
                    placeholder="Vi???t c??u h???i c???a b???n"
                  ></textarea>

                  <button>
                    <Link>G???i c??u h???i</Link>
                  </button>

                  <div className="container__box__question__commments">
                    <div className="container__box__question__commment">
                      <div className="container__box__question__commment__name">
                        <p>NDD</p>
                      </div>
                      <div className="container__box__question__commment__cmt">
                        <div className="container__box__question__commment__cmt__top">
                          <p>Nguy???n ?????i ????ng</p>
                          <p>1 gi??? tr?????c</p>
                        </div>
                        <div className="container__box__question__commment__cmt__botton">
                          <p>C??n h??ng kh??ng ???</p>
                        </div>
                      </div>
                    </div>
                    <div className="container__box__question__commment">
                      <div className="container__box__question__commment__name">
                        <p>NDD</p>
                      </div>
                      <div className="container__box__question__commment__cmt">
                        <div className="container__box__question__commment__cmt__top">
                          <p>Nguy???n ?????i ????ng</p>
                          <p>1 gi??? tr?????c</p>
                        </div>
                        <div className="container__box__question__commment__cmt__botton">
                          <p>C??n h??ng kh??ng ???</p>
                        </div>
                      </div>
                    </div>
                    <div className="container__box__question__commment">
                      <div className="container__box__question__commment__name">
                        <p>NDD</p>
                      </div>
                      <div className="container__box__question__commment__cmt">
                        <div className="container__box__question__commment__cmt__top">
                          <p>Nguy???n ?????i ????ng</p>
                          <p>1 gi??? tr?????c</p>
                        </div>
                        <div className="container__box__question__commment__cmt__botton">
                          <p>C??n h??ng kh??ng ???</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="container_Products_Sales"
                id="height_detial_moblet"
              >
                <h3>S???N PH???M LI??N QUAN</h3>
                <div className="product-card">
                  {products.map(product => (
                    <div
                      className="product-card__box"
                      id="height_product_Laptop"
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
              </div>
            </div>
          </div>
        </Helmet>
      ))}
    </>
  );
}
