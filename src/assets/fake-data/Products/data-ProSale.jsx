import { createContext, useState, useEffect } from "react";
import { BiChip } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMicrochip, FaHdd, FaWeightHanging } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { CgCreditCard } from "react-icons/cg";
const product_01 = require("../../images/products/img1.jpg").default;
const product_02 = require("../../images/products/img2.jpg").default;
const product_03 = require("../../images/products/img3.jpg").default;
const product_04 = require("../../images/products/img4.jpg").default;
const product_05 = require("../../images/products/img5.jpg").default;
const product_06 = require("../../images/products/img6.jpg").default;
const product_06_01 = require("../../images/products/img6.1.jpg").default;
const product_06_02 = require("../../images/products/img6.2.jpg").default;
const product_06_03 = require("../../images/products/img6.3.jpg").default;
const product_07 = require("../../images/products/img7.jpg").default;
const product_08 = require("../../images/products/img8.jpg").default;
const product_09 = require("../../images/products/img9.jpg").default;
const product_10 = require("../../images/products/img10.jpg").default;
const product_11 = require("../../images/products/img11.jpg").default;
const product_12 = require("../../images/products/img12.jpg").default;
const product_pay_01 = require("../../images/products/pay1.jpg").default;
const product_pay_02 = require("../../images/products/pay2.jpeg").default;
const product_pay_03 = require("../../images/products/pay3.jpg").default;

const imgtext1 = require("../../images/products/oppo/imgtext1.jpg").default;
const imgtext2 = require("../../images/products/oppo/imgtext2.jpg").default;
const imgtext3 = require("../../images/products/oppo/imgtext3.jpg").default;
const imgtext4 = require("../../images/products/oppo/imgtext4.jpg").default;
const imgtext5 = require("../../images/products/oppo/imgtext5.jpg").default;
const imgtext6 = require("../../images/products/oppo/imgtext6.jpg").default;
const imgtext7 = require("../../images/products/oppo/imgtext7.jpg").default;
const imgtext8 = require("../../images/products/oppo/imgtext8.jpg").default;
export const DataContext = createContext();

export const DataProSale = props => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      images: product_01,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 13 Pro Max 128GB",
      slug: "iPhone-13-Pro-Max-128GB",
      price: "33990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 3.500.000đ",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      count: 1,
    },
    {
      _id: "2",
      images: product_02,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy S20 FE 256GB ",
      slug: "Samsung-Galaxy-S20-FE-256GB ",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "11999000",
      del: "15499000",
      installment: "Trả góp 0%",
      sale: "Gỉam 3.500.000đ",
      count: 1,
    },
    {
      _id: "3",
      images: product_03,
      imgpay1: product_pay_01,
      imgpay3: product_pay_03,
      title: "Xiaomi 11 Life 5G NE 8GB - 128GB",
      slug: "Xiaomi-11-Life-5G-NE-8GB - 128GB",
      content: "Giam thêm 5% tối đa 700.000đ",
      price: "8490000",
      del: "9490000",
      installment: "Trả góp 0%",
      sale: "Gỉam 1.000.000đ",
      count: 1,
    },
    {
      _id: "4",
      images: product_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 12 Pro Max 256GB",
      slug: "iPhone-12-Pro-Max-256GB",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "32999000",
      del: "36999000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      count: 1,
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

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
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
