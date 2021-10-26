import { createContext, useState, useEffect } from "react";

const product_01 = require("../../images/products/apple/img1.jpg").default;
const product_02 = require("../../images/products/apple/img1.jpg").default;
const product_03 = require("../../images/products/apple/img2.jpg").default;
const product_04 = require("../../images/products/apple/img2.jpg").default;
const product_05 = require("../../images/products/apple/img3.jpg").default;
const product_06 = require("../../images/products/apple/img3.jpg").default;
const product_07 = require("../../images/products/apple/img4.jpg").default;
const product_08 = require("../../images/products/apple/img5.jpg").default;
const product_09 = require("../../images/products/apple/img6.jpg").default;

const product_10 = require("../../images/products/apple/img6.jpg").default;
const product_11 = require("../../images/products/apple/img7.jpg").default;
const product_12 = require("../../images/products/apple/img7.jpg").default;
const product_13 = require("../../images/products/apple/img8.jpg").default;
const product_14 = require("../../images/products/apple/img9.jpg").default;
const product_15 = require("../../images/products/apple/img10.jpg").default;
const product_16 = require("../../images/products/apple/img11.jpg").default;

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
export const DataApple = props => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      images: product_01,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 13 Pro Max",
      slug: "iPhone-13-Pro-Max",
      titledetial: "iPhone",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "33990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",
      screen: "6.7”",
      ram: "6 GB",
      rom: "126 GB",
      danhgia: "10 đánh giá",
      hoidap: "1050 hỏi đáp",
      hoi: "1050",
      tragop: "1.628.00đ",
      tag: "dưới 2 triệu",
      count: 1,
    },
    {
      _id: "2",
      images: product_02,

      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      slug: "iPhone-13-Pro",
      title: "iPhone 13 Pro",
      titledetial: "iPhone",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "30990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",

      screen: "6.1”",

      ram: "6 GB",

      rom: "128 GB",

      danhgia: "1 đánh giá",
      hoidap: "87 hỏi đáp",
      hoi: "87",
      tragop: "1.628.00đ",
      saledes1: "Tặng Loa Tekin L6 áp dụng đến 20/10",
      saledes2: "Bảo hành 2 năm",
      saledes3:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy",
      saledes4:
        "Giảm ngay 120.000đ vòng đeo tay thông minh Oppo Band khi mua kèm ĐTDĐ Oppo",
      saledes5: "Thu cũ đổi mới - Trợ giá ngay 15%",
      saledes6: "Trúng 1.000 quà tặng đỉnh cao",

      text1: "Đặc điểm nổi bật của Oppo Reno6 5G",
      imgtext1: imgtext1,
      text2: "Đánh giá chi tiết Oppo Reno6 5G",
      content1:
        "Sẵn sàng bật tung cảm xúc cùng OPPO Reno6 5G, chiếc điện thoại sở hữu thiết kế đẳng cấp siêu mỏng nhẹ, camera chụp chân dung Bokeh Flare độc đáo và trên hết là kết nối mạng 5G siêu tốc, cùng bạn kết nối tương lai.",
      imgtext2: imgtext2,
      text3: "Quay video xóa phông cực đỉnh",
      content2:
        "OPPO Reno6 5G nâng tầm khả năng quay video lên một tầm cao mới bằng những tính năng đầy nghệ thuật. Bạn có thể quay chân dung Bokeh Flare, làm mờ ánh đèn phông nền một cách lung linh huyền ảo, tạo hiệu ứng điện ảnh. Trí tuệ nhân tạo AI trên camera sẽ kết hợp tính năng Live HDR và Siêu video quay đêm để bạn lưu lại những khoảnh khắc ấn tượng lúc bình minh hay hoàng hôn. Ngoài ra bạn còn có thể quay video làm đẹp chân dung tôn vinh vẻ đẹp thần thái; chế độ chân dung màu AI nổi bật; quay video khóa nét chủ thể để hình ảnh luôn sắc nét dù có chuyển động nhanh trong khung hình",
      videtext1: "https://youtu.be/xszLPD6fkEs",
      text4: "Thế giới màu sắc sống động",
      content3:
        "Camera chính 64MP của OPPO Reno6 5G được hỗ trợ bởi cảm biến nhiệt độ màu, tái tạo màu sắc hoàn hảo. Cảm biến nhiệt độ màu sẽ ghi lại cân bằng trắng thời điểm bạn chụp hình, tăng tốc độ màn trập, đồng thời điều chỉnh màu để màu sắc chính xác và sống động như thật. Tốc độ chụp ảnh siêu nhanh giúp bạn không bỏ lỡ bất cứ khoảnh khắc đáng nhớ nào. Ngoài ra OPPO Reno6 5G còn có chế độ ảnh siêu nét 108MP, ghi lại hình ảnh sắc nét hơn bao giờ hết, để bạn dù có phóng to cũng không bị vỡ hình, bức hình vẫn rất giàu chi tiết.",
      imgtext3: imgtext3,
      text5: "Thiết kế siêu mỏng nhẹ, đơn giản nhưng đậm chất tinh tế",
      content4:
        "OPPO Reno6 5G có thiết kế siêu mỏng nhẹ với độ mỏng chỉ 7,59mm. Điện thoại được hoàn thiện theo ngôn ngữ thiết kế phẳng, vuông vắn, đơn giản nhưng không bao giờ lỗi thời, vừa mang đến dáng vẻ sang trọng, lại vừa cho cảm giác cầm nắm thoải mái. Máy được phủ lớp sơn OPPO Reno Glow độc đáo, đẹp lấp lánh nhưng không hề quá phô trương và đặc biệt không bám bẩn hay dấu vân tay. Công nghệ này đã được công nhận bởi hơn 20 bằng sáng chế, khiến cho OPPO Reno6 5G đẹp như một tác phẩm nghệ thuật.",
      imgtext4: imgtext4,
      text6: "Đến với kỷ nguyên của tốc độ",
      content5:
        "Trong nháy mắt, cả thế giới thông tin đều nằm trong tay bạn với kết nối 5G đỉnh cao trên OPPO Reno6 5G. Điện thoại trang bị bộ vi xử lý Dimensity 900 5G được sản xuất trên quy trình 6nm tiên tiến vượt bậc, không chỉ cho kết nối di động nhanh chưa từng thấy mà còn có hiệu năng mạnh mẽ và khả năng tiết kiệm năng lượng tối ưu.",

      imgtext5: imgtext5,
      text7: "Thoải mái đa nhiệm và lưu trữ",
      content6:
        "OPPO Reno6 5G có sẵn bộ nhớ cực khủng với 8GB RAM và 128GB bộ nhớ trong, cho bạn thoải mái mở cùng lúc nhiều ứng dụng, cài đặt hay lưu trữ bất cứ thứ gì bạn thích. Hơn thế nữa, máy còn có tính năng bộ nhớ mở rộng, chuyển đổi thêm 5GB RAM từ ROM sang RAM để bạn có được dung lượng RAM khổng lồ 13GB, mang tới trải nghiệm mượt mà.",

      imgtext6: imgtext6,
      text8: "Công nghệ sạc siêu nhanh 65W",
      content7:
        "SuperVOOC 2.0 là công nghệ sạc siêu nhanh đã thành thương hiệu của OPPO. Giờ đây với công suất sạc lên đến 65W trên OPPO Reno6 5G, bạn chỉ mất vỏn vẹn 28 phút để sạc đầy hoàn toàn 100% pin, hoặc 5 phút để sạc được 25% pin. Bạn sẽ không cần phải chờ đợi và tự tin sử dụng điện thoại suốt cả ngày, luôn ngập tràn năng lượng.",

      imgtext7: imgtext7,
      text9: "Chơi game chuyên nghiệp",
      content8:
        "OPPO Reno6 5G là chiếc điện thoại lý tưởng cho chơi game khi bên cạnh hiệu năng hàng đầu, máy còn sở hữu loạt công nghệ mà các game thủ sẽ rất hứng thú. Hệ thống làm mát đa năng với tấm tản nhiệt graphite 9200 diện tích rộng sẽ luôn giữ cho nhiệt độ CPU ổn định, đảm bảo hiệu năng cao dù bạn chơi game trong thời gian dài; công nghệ Z-axis Linear Motor mang tới những chuyển động rung chân thực; âm thanh Dolby Atmos đầy sống động; màn hình lớn 6,43 inch AMOLED tần số quét cao 90Hz cho những thao tác vuốt chạm của bạn mượt mà đầy hứng khởi.",
      imgtext8: imgtext8,
      videtext2: "https://youtu.be/pqy7BCqDKO8",

      screentitle: "6.43, FHD+, AMOLED, 1080 x 2400 Pixel",

      cameratitle: "	64.0 MP + 8.0 MP + 2.0 MP",

      selfietitle: "32.0 MP",
      ramtitle: "	8 GB",
      romtitle: "	128 GB",
      cputitle: "	MediaTek Dimensity 900 5G",
      gputitle: "	ARM Mali-G68 MC4",
      pintitle: "4300 mAh",
      simtitle: "	2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "	Trung Quốc",
      time: "07/2021",
      count: 1,
      nhanxet: "10 nhận xét",
    },
    {
      _id: "3",
      images: product_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 13",
      titledetial: "iPhone",
      slug: "iPhone-13",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "24990000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",

      screen: "6.1”",

      ram: "4 GB",

      rom: "128 GB",

      danhgia: "1 đánh giá",
      hoidap: "572 hỏi đáp",
      hoi: "572",

      count: 1,
    },
    {
      _id: "4",
      images: product_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 13 mini",
      titledetial: "iPhone",
      slug: "iPhone-13-mini",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "21990000đ",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",

      screen: "5.4”",

      ram: "4GB",

      rom: "128 GB",

      danhgia: "1 đánh giá",
      hoidap: "40 hỏi đáp",
      hoi: "40",
      count: 1,
    },
    {
      _id: "5",
      images: product_05,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 12 Pro Max",
      titledetial: "iPhone",
      slug: "iPhone-12-Pro-Max",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "30999000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",

      screen: "6.7”",

      ram: "6 GB",

      rom: "128 GB",

      danhgia: "58 đánh giá",
      hoidap: "2413 hỏi đáp",
      hoi: "2413",
      count: 1,
    },
    {
      _id: "6",
      images: product_06,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 12 Pro",
      titledetial: "iPhone",
      slug: "iPhone-12-Pro",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "24990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",

      screen: "6.1”",

      ram: "6 GB",

      rom: "128 GB",

      danhgia: "34 đánh giá",
      hoidap: "682 hỏi đáp",
      hoi: "682",
      count: 1,
    },
    {
      _id: "7",
      images: product_07,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 12",
      titledetial: "Samsung",
      slug: "Samsung-Galaxy-A22-5G",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "19990000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",

      screen: "6.1”",

      ram: "4 GB",

      rom: "64 GB",
      danhgia: "39 đánh giá",
      hoidap: "1754 hỏi đáp",
      hoi: "1754",
      count: 1,
    },
    {
      _id: "8",
      images: product_08,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad 10.2 2021 Wi-Fi ",
      slug: "iPad-10.2-2021 Wi-Fi ",
      titledetial: "Ipad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "9990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A13 Bionic",

      screen: "10.2”",

      ram: "3 GB",

      rom: "64 GB",

      danhgia: "159 đánh giá",
      hoidap: "4834 hỏi đáp",
      hoi: "4834",
      count: 1,
    },
    {
      _id: "9",
      images: product_09,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad 10.2 2021 Wi-Fi + Cellular",
      slug: "iPad-10.2-2021 Wi-Fi + Cellular",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "13990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A13 Bionic",

      screen: "10.2”",

      ram: "3 GB",

      rom: "64 GB",

      danhgia: "1 đánh giá",
      hoidap: "172 hỏi đáp",
      hoi: "172",
      count: 1,
    },
    {
      _id: "10",
      images: product_10,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad 8.3 2021 Wi-Fi",
      slug: "iPad-8.3-2021 Wi-Fi",
      titledetial: "iPhone",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "14990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",

      screen: "Đang cập nhật",

      ram: "3 GB",

      rom: "64 GB",
      danhgia: "1 đánh giá",
      hoidap: "70 hỏi đáp",
      hoi: "70",
      count: 1,
    },
    {
      _id: "11",
      images: product_11,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad 8.3 2021 Wi-Fi 5G",
      slug: "iPad-8.3-2021 Wi-Fi-5G",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "19990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",

      screen: "Đang cập nhật",

      ram: "3 GB",

      rom: "64 GB",

      danhgia: "1 đánh giá",
      hoidap: "16 hỏi đáp",
      hoi: "16",
      count: 1,
    },
    {
      _id: "12",
      images: product_12,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad Air 10.9 2020 Wi-Fi 64GB",
      slug: "iPad-Air-10.9-2020-Wi-Fi-64GB",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "16799000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",
      screen: "10.9”",
      ram: "4 GB",
      rom: "64 GB",
      danhgia: "2 đánh giá",
      hoidap: "152 hỏi đáp",
      hoi: "152",
      count: 1,
    },

    {
      _id: "13",
      images: product_13,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad Air 10.9 2020 Wi-Fi + Cellular 64GB",
      slug: "iPad-Air-10.9-2020-Wi-Fi-Cellular-64GB",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "20799000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",
      screen: "10.9”",
      ram: "4 GB",
      rom: "64 GB",
      danhgia: "1 đánh giá",
      hoidap: "23 hỏi đáp",
      hoi: "23",
      count: 1,
    },

    {
      _id: "14",
      images: product_14,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad Pro 11 2021 M1 Wi-Fi 5G ",
      slug: "iPad-Pro-11-2021-M1-Wi-Fi-5G  ",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "26999000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Apple M1",
      screen: "11.0”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "1 đánh giá",
      hoidap: "134 hỏi đáp",
      hoi: "134",
      count: 1,
    },
    {
      _id: "15",
      images: product_15,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPad Pro 11 2021 M1 Wi-Fi  ",
      slug: "iPad-Pro-11-2021-M1-Wi-Fi  ",
      titledetial: "iPad",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "22799000",

      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Apple M1",
      screen: "11.0”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "3 đánh giá",
      hoidap: "178 hỏi đáp",
      hoi: "178",
      count: 1,
    },

    {
      _id: "16",
      images: product_16,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "MacBook Air 13” 2020 M1 256GB",
      slug: "MacBook-Air-13”-2020-M1-256GB",
      titledetial: "MacBook",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "28999000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "M1",
      screen: "13.3”",
      ram: "8 GB",
      rom: "226 GB",
      danhgia: "2 đánh giá",
      hoidap: "1307 hỏi đáp",
      hoi: "1307",

      card: "Apple M1",
      kg: "1.29",
      count: 1,
    },
    /*
    {
      _id: "17",
      images: product_17,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "MacBook Air 13” 2020 M1 Touch Bar M1 256GB",
      slug: "MacBook-Air-13”-2020-M1-Touch-Bar-M1-256GB",
      titledetial: "MacBook",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "34449000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "M1",
      screen: "13.3”",
      ram: "8 GB",
      rom: "226 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      card: "Apple M1",
      kg: "1.4",
      count: 1,
    },
    {
      _id: "18",
      images: product_18,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi Redmi Note 10S 8GB-128GB ",
      slug: "Xiaomi-Redmi-Note-10S-8GB-128GB  ",
      titledetial: "Xiaomi",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "6490000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "MediaTek Helio G95",
      screen: "6.43”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      count: 1,
    },
    {
      _id: "19",
      images: product_19,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Vivo Y12s 2021 3GB-32GB  ",
      slug: "Vivo-Y12s-2021-3GB-32GB ",
      titledetial: "Vivo",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "3490000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Snapdragon 439",
      screen: "6.51”",
      ram: "3 GB",
      rom: "32 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      count: 1,
    },
    {
      _id: "20",
      images: product_20,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Realme C21y 3GB - 32GB ",
      slug: "Realme-C21y-3GB - 32GB ",
      titledetial: "Realme",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "3490000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Unisoc T610",
      screen: "6.5”",
      ram: "3 GB",
      rom: "32 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      count: 1,
    },

    {
      _id: "12",
      images: product_21,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi Redmi 9C 3GB-64GB ",
      slug: "Xiaomi-Redmi-9C-3GB-64GB ",
      titledetial: "Realme",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "2990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Mediatek Helio G35",
      screen: "6.53”",
      ram: "3 GB",
      rom: "64 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      count: 1,
    },
    */
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
