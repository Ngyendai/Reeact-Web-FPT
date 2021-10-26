import { createContext, useState, useEffect } from "react";
import { BiChip } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { CgCreditCard } from "react-icons/cg";

const product_01 = require("../../images/products/phukien/img1.jpg").default;
const product_02 = require("../../images/products/phukien/img2.jpg").default;
const product_03 = require("../../images/products/phukien/img3.jpg").default;
const product_04 = require("../../images/products/phukien/img4.jpg").default;
const product_05 = require("../../images/products/phukien/img5.jpg").default;
const product_06 = require("../../images/products/phukien/img6.jpg").default;
const product_07 = require("../../images/products/phukien/img7.jpg").default;
const product_08 = require("../../images/products/phukien/img8.jpg").default;
const product_09 = require("../../images/products/phukien/img9.jpg").default;
const product_10 = require("../../images/products/phukien/img10.jpg").default;
const product_11 = require("../../images/products/phukien/img11.jpg").default;
const product_12 = require("../../images/products/phukien/img12.jpg").default;
const product_13 = require("../../images/products/phukien/img13.jpg").default;
const product_14 = require("../../images/products/phukien/img14.jpg").default;
const product_15 = require("../../images/products/phukien/img15.jpg").default;
const product_16 = require("../../images/products/phukien/img16.jpg").default;
const product_17 = require("../../images/products/phukien/img17.jpg").default;
const product_18 = require("../../images/products/phukien/img18.jpg").default;
const product_19 = require("../../images/products/phukien/img19.jpg").default;
const product_20 = require("../../images/products/phukien/img20.jpg").default;
const product_pay_01 = require("../../images/products/pay1.jpg").default;
const product_pay_02 = require("../../images/products/pay2.jpeg").default;
const product_pay_03 = require("../../images/products/pay3.jpg").default;
export const DataContext = createContext();
export const DataAccessory = props => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      images: product_01,

      title: "Chuột Không dây Quang Prolink 6005",
      text: "Chuột không dây",

      price: "223000",
      del: "319000",
      count: 1,
      danhgia: "61 đánh giá",
      hoidap: "145 hỏi đáp",
      hoi: "145",
    },

    {
      _id: "2",
      images: product_02,
      title: "USB 3.0 OTG 16GB Sandisk",

      price: "199.000",
      text: "USB 3.0",
      del: "220.000",
      count: 1,
      danhgia: "951 đánh giá",
      hoidap: "131 hỏi đáp",
      hoi: "131",
    },
    {
      _id: "3",
      images: product_03,
      title: "Chuột Không dây Quang Prolink C6001",
      text: "Chuột không dây",

      price: "223000",
      del: "319000",
      count: 1,
      danhgia: "1167 đánh giá",
      hoidap: "184 hỏi đáp",
      hoi: "184",
    },
    {
      _id: "4",
      images: product_04,

      title: "Tai nghe AirPods 2 hộp sạc dây",

      price: "2999000",
      del: "3999000",
      count: 1,
    },
    {
      _id: "5",
      images: product_05,

      title: "Chuột game có dây Zadez GT-613M",

      price: "245000",
      del: "350000",
      text: "Chuột Gaming",
      count: 1,
      danhgia: "53 đánh giá",
      hoidap: "52 hỏi đáp",
      hoi: "52",
    },
    {
      _id: "6",
      images: product_06,

      title: "Bàn phím Game Zadez G-852K",
      text: "Bàn phím cơ",

      price: "540000",
      dle: "600000",
      count: 1,
      danhgia: "76 đánh giá",
      hoidap: "97 hỏi đáp",
      hoi: "97",
    },
    {
      _id: "7",
      images: product_07,

      title: "Bao da nắp gập iPad Mini 5 2019 Nhựa cứng viền dẻo Pen Slot...",

      text: "Bao da",
      price: "225000",
      del: "450000",
      count: 1,
      danhgia: "72 đánh giá",
      hoidap: "25 hỏi đáp",
      hoi: "25",
    },
    {
      _id: "8",
      images: product_08,

      title: "Cáp Micro 0.3m ivalue TPE ",
      text: "Cáp sạc",

      price: "39000",
      del: "79000",
      count: 1,
      danhgia: "78 đánh giá",
      hoidap: "28 hỏi đáp",
      hoi: "28",
    },

    {
      _id: "9",
      images: product_09,

      title: "Cáp Micro 2m ivalue Jelly",
      text: "Cáp sạc",

      price: "99000",
      del: "199000",

      count: 1,
      danhgia: "48 đánh giá",
      hoidap: "30 hỏi đáp",
      hoi: "30",
    },
    {
      _id: "10",
      images: product_10,

      title: "Ốp lưng Samsung Note 10 Plus Led Back Black ",
      text: "Nhựa",

      price: "623.000",
      del: "890.000",
      count: 1,
      danhgia: "62 đánh giá",
      hoidap: "0 hỏi đáp",
      hoi: "0",
    },
    {
      _id: "11",
      images: product_11,

      title: "Bao da Samsung Note 10 Clear View Black",

      price: "833000",
      del: "1190000",
      text: "Nhựa",
      count: 1,
      danhgia: "74 đánh giá",
      hoidap: "0 hỏi đáp",
      hoi: "0",
    },
    {
      _id: "12",
      images: product_12,

      title: "Adapter Sạc 2A Mini Anker A2620",
      text: "Adapter Sạc",

      price: "200000",
      del: "250000",

      count: 1,
      danhgia: "1 đánh giá",
      hoidap: "7 hỏi đáp",
      hoi: "7",
    },
    {
      _id: "13",
      images: product_13,

      title: "Adapter Sạc 2A Elite Anker A2023",
      text: "Adapter Sạc",

      price: "360.000",
      del: "450.000",
      count: 1,
      danhgia: "54 đánh giá",
      hoidap: "0 hỏi đáp",
      hoi: "0",
    },
    {
      _id: "14",
      images: product_14,

      title: "Adapter Sạc 2A PD1 Anker A2019 ",
      text: "Adapter Sạc",

      price: "400000",
      del: "500000",
      count: 1,
      danhgia: "52 đánh giá",
      hoidap: "62 hỏi đáp",
      hoi: "62",
    },
    {
      _id: "15",
      images: product_15,

      title: "Adapter Sạc 2A PowerPort II Anker A2321",
      text: "Adapter Sạc",

      price: "800000",
      del: "1000000",

      count: 1,
      danhgia: "63 đánh giá",
      hoidap: "33 hỏi đáp",
      hoi: "33",
    },
    {
      _id: "16",
      images: product_16,

      title: "Adapter Sạc 2A PD+2 Anker A2626",
      text: "Adapter Sạc",

      price: "520000",
      del: "65.000",

      count: 1,
      danhgia: "45 đánh giá",
      hoidap: "43 hỏi đáp",
      hoi: "43",
    },
    {
      _id: "17",
      images: product_17,

      title: "Bộ sạc nhanh 45w Samsung USB-C",
      text: "Adapter Sạc",

      price: "792000",
      del: "990000",
      count: 1,
      danhgia: "42 đánh giá",
      hoidap: "0 hỏi đáp",
      hoi: "0",
    },
    {
      _id: "18",
      images: product_18,

      title: "Combo Loa Bluetooth Karaoke i.value 6.5inch Gỗ + Mic không",
      text: "Loa karaoke",

      price: "2303000",
      del: "3290000",
      count: 1,
      danhgia: "63 đánh giá",
      hoidap: "74 hỏi đáp",
      hoi: "74",
    },
    {
      _id: "19",
      images: product_19,

      title: "Ốp lưng iPhone 11 Tráng gương viền dẻo Transparent Tempered...",
      text: "Nhựa",

      price: "49000",
      del: "99000",
      count: 1,
      danhgia: "45 đánh giá",
      hoidap: "8 hỏi đáp",
      hoi: "8",
    },

    {
      _id: "18",
      images: product_20,

      title: "Bao da iPhone 11 Pro Leather Folio Black",

      price: "1999500",
      del: "3999000",
      count: 1,
      danhgia: "53 đánh giá",
      hoidap: "0 hỏi đáp",
      hoi: "0",
    },
  ]);

  // Về add cart
  const [cart, setCart] = useState([]);

  const addCart = id => {
    const check = cart.every(item => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter(product => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  //cart
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    // sản phẩm
    products: [products, setProducts],
    // cart
    cart: [cart, setCart],
    addCart: addCart,
  };
  return (
    <DataContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </DataContext.Provider>
  );
};
