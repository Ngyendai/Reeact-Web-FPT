import { createContext, useState, useEffect } from "react";

const product_01 = require("../../images/products/img5.jpg").default;
const product_01_01 = require("../../images/products/img5.1.jpg").default;
const product_01_02 = require("../../images/products/img5.2.jpg").default;
const product_01_03 = require("../../images/products/img5.3.jpg").default;
const product_01_04 = require("../../images/products/img5.4.jpg").default;
const product_01_05 = require("../../images/products/img5.5.jpg").default;
const product_01_06 = require("../../images/products/img5.6.jpg").default;
const product_02 = require("../../images/products/img6.jpg").default;
const product_02_01 = require("../../images/products/img6.1.jpg").default;
const product_02_02 = require("../../images/products/img6.2.jpg").default;
const product_02_03 = require("../../images/products/img6.3.jpg").default;
const product_03 = require("../../images/products/img7.jpg").default;
const product_03_02 = require("../../images/products/img7.1.jpg").default;
const product_03_03 = require("../../images/products/img7.2.jpg").default;
const product_03_04 = require("../../images/products/img7.3.jpg").default;
const product_04 = require("../../images/products/img8.jpg").default;
const product_04_02 = require("../../images/products/img8.1.jpg").default;
const product_04_03 = require("../../images/products/img8.2.jpg").default;
const product_05 = require("../../images/products/img9.jpg").default;

const product_06 = require("../../images/products/img10.jpg").default;
const product_06_01 = require("../../images/products/img10.0.jpg").default;
const product_06_02 = require("../../images/products/img10.1.jpg").default;
const product_06_03 = require("../../images/products/img10.2.jpg").default;
const product_07 = require("../../images/products/img11.jpg").default;
const product_07_01 = require("../../images/products/img11.1.jpg").default;
const product_07_02 = require("../../images/products/img11.2.jpg").default;
const product_07_03 = require("../../images/products/img11.3.jpg").default;
const product_08 = require("../../images/products/img12.jpg").default;
const product_08_02 = require("../../images/products/img12.1.jpg").default;
const product_08_03 = require("../../images/products/img12.2.jpg").default;
const product_09 = require("../../images/products/img1.jpg").default;

const product_10 = require("../../images/products/dienthoai/img1.jpg").default;
const product_10_01 =
  require("../../images/products/dienthoai/img1.1.jpg").default;
const product_10_02 =
  require("../../images/products/dienthoai/img1.2.jpg").default;
const product_10_03 =
  require("../../images/products/dienthoai/img1.3.jpg").default;
const product_10_04 =
  require("../../images/products/dienthoai/img1.4.jpg").default;
const product_10_05 =
  require("../../images/products/dienthoai/img1.5.jpg").default;
const product_10_06 =
  require("../../images/products/dienthoai/img1.6.jpg").default;
const product_11 = require("../../images/products/dienthoai/img2.jpg").default;
const product_11_02 =
  require("../../images/products/dienthoai/img2.1.jpg").default;
const product_11_03 =
  require("../../images/products/dienthoai/img2.1.jpg").default;
const product_12 = require("../../images/products/dienthoai/img3.jpg").default;
const product_12_02 =
  require("../../images/products/dienthoai/img3.1.jpg").default;
const product_12_03 =
  require("../../images/products/dienthoai/img3.2.jpg").default;
const product_12_04 =
  require("../../images/products/dienthoai/img3.3.jpg").default;
const product_13 = require("../../images/products/dienthoai/img4.jpg").default;

const product_13_02 =
  require("../../images/products/dienthoai/img4.2.png").default;
const product_13_03 =
  require("../../images/products/dienthoai/img4.3.png").default;
const product_14 = require("../../images/products/dienthoai/img5.jpg").default;
const product_14_02 =
  require("../../images/products/dienthoai/img5.1.png").default;
const product_14_03 =
  require("../../images/products/dienthoai/img5.2.png").default;
const product_14_04 =
  require("../../images/products/dienthoai/img5.3.png").default;
const product_15 = require("../../images/products/dienthoai/img6.jpg").default;
const product_15_02 =
  require("../../images/products/dienthoai/img6.1.jpg").default;
const product_15_03 =
  require("../../images/products/dienthoai/img6.2.png").default;
const product_15_04 =
  require("../../images/products/dienthoai/img6.3.png").default;
const product_15_05 =
  require("../../images/products/dienthoai/img6.4.png").default;
const product_15_06 =
  require("../../images/products/dienthoai/img6.5.jpg").default;
const product_15_07 =
  require("../../images/products/dienthoai/img6.6.jpg").default;
const product_16 = require("../../images/products/dienthoai/img7.jpg").default;
const product_16_02 =
  require("../../images/products/dienthoai/img7.1.jpg").default;
const product_16_03 =
  require("../../images/products/dienthoai/img7.2.jpg").default;
const product_16_04 =
  require("../../images/products/dienthoai/img7.3.jpg").default;
const product_16_05 =
  require("../../images/products/dienthoai/img7.4.jpg").default;
const product_17 = require("../../images/products/dienthoai/img8.jpg").default;
const product_17_02 =
  require("../../images/products/dienthoai/img8.1.jpg").default;
const product_17_03 =
  require("../../images/products/dienthoai/img8.2.jpg").default;

const product_18 = require("../../images/products/dienthoai/img9.jpg").default;
const product_18_02 =
  require("../../images/products/dienthoai/img9.1.jpg").default;
const product_18_03 =
  require("../../images/products/dienthoai/img9.2.jpg").default;
const product_18_04 =
  require("../../images/products/dienthoai/img9.3.jpg").default;

const product_19 = require("../../images/products/dienthoai/img10.jpg").default;
const product_19_02 =
  require("../../images/products/dienthoai/img10.1.jpg").default;
const product_19_03 =
  require("../../images/products/dienthoai/img10.2.jpg").default;
const product_20 = require("../../images/products/dienthoai/img11.jpg").default;
const product_20_02 =
  require("../../images/products/dienthoai/img11.1.jpg").default;
const product_20_03 =
  require("../../images/products/dienthoai/img11.2.jpg").default;
const product_21 = require("../../images/products/dienthoai/img12.jpg").default;
const product_21_02 =
  require("../../images/products/dienthoai/img12.1.jpg").default;
const product_21_03 =
  require("../../images/products/dienthoai/img12.2.jpg").default;
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

/* samsung */
const imgsamsung1 = require("../../images/products/samsung/img1.1.jpg").default;
const imgsamsung2 = require("../../images/products/samsung/img1.2.jpg").default;
const imgsamsung3 = require("../../images/products/samsung/img1.3.jpg").default;
const imgsamsung4 = require("../../images/products/samsung/img1.4.jpg").default;
const imgsamsung5 = require("../../images/products/samsung/img1.5.jpg").default;
const imgsamsung6 = require("../../images/products/samsung/img1.6.jpg").default;
const imgsamsung7 = require("../../images/products/samsung/img1.7.jpg").default;
const imgsamsung8 = require("../../images/products/samsung/img1.8.jpg").default;
const imgsamsung9 = require("../../images/products/samsung/img1.9.jpg").default;
const imgsamsung10 =
  require("../../images/products/samsung/img1.10.jpg").default;
const imgsamsung11 =
  require("../../images/products/samsung/img1.11.jpg").default;
const imgsamsung12 =
  require("../../images/products/samsung/img1.12.jpg").default;
export const DataContext = createContext();
export const DataProMoblet = props => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      images: product_01,
      imagesdetial1: product_01_01,
      imagesdetial2: product_01_02,
      imagesdetial3: product_01_03,
      imagesdetial4: product_01_04,
      imagesdetial5: product_01_05,
      imagesdetial6: product_01_06,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 12 64GB",
      slug: "iPhone-12-64GB",
      titledetial: "iPhone",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "19999000",
      del: "21999000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A14 Bionic",
      detialtext1: "6.11”, Super Retina XDR, OLED, 2532 x 1170 Pixel",
      detialtext2: "12.0 MP + 12.0 MP",
      detialtext3: "12.0 MP",
      detialtext4: "A14 Bionic",
      detialtext5: "64 GB",

      screen: "6.1”",

      ram: "4 GB",

      rom: "64 GB",

      danhgia: "15 đánh giá",
      hoidap: "350 hỏi đáp",
      hoi: "350",
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
      _id: "2",
      images: product_02,
      imagesdetial1: product_02_01,
      imagesdetial2: product_02_02,
      imagesdetial3: product_02_03,
      imgpay1: product_pay_01,
      detialtext1: "6.43”, FHD+, AMOLED, 1080 x 2400 Pixel",
      detialtext2: "64.0 MP + 8.0 MP + 2.0 MP",
      detialtext3: "32.0 MP",
      detialtext4: "MediaTek Dimensity 900 5G",
      detialtext5: "128 GB",

      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      slug: "Oppo-Reno6-5G",
      title: "Oppo Reno6 5G",
      titledetial: "OPPO",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "12990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "MediaTek Dimensity 900 5G",
      screen: "6.43”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "5 đánh giá",
      hoidap: "261 hỏi đáp",
      hoi: "261",
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
      imagesdetial2: product_03_02,
      imagesdetial3: product_03_03,
      imagesdetial4: product_03_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy Z Fold3 5G 256GB",
      titledetial: "Samsung",
      slug: "Samsung-Galaxy-Z-Fold3-5G-256GB",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "32999000",
      del: "36999000đ",
      tragop: "2.744.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      saledes1:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes2:
        "Gói dịch vụ ưu tiên Z Pass Priority & phòng chờ hạng thương gia tại sân bay",
      saledes3: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes4: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes5: "Ưu đãi dán màn hình 01 năm",
      saledes6: "Giảm 10% Tai nghe Galaxy Buds2 khi mua kèm máy",

      text1: "Đặc điểm nổi bật của Samsung Galaxy Z Fold3 5G",
      imgtext1: imgsamsung1,
      text2: "Đánh giá chi tiết Samsung Galaxy Z Fold3 5G",
      content1:
        "Khi bạn mở ra màn hình gập lớn tới 7,6 inch trên Samsung Galaxy Z Fold3 5G là lúc bạn đã mở ra một tương lai hoàn toàn mới cho thế giới smartphone, nơi công nghệ vượt qua mọi giới hạn, cho trải nghiệm hoàn hảo nhất ở một thiết bị di động nhỏ gọn.",
      imgtext2: imgsamsung2,
      text3: "Gập mở linh hoạt, màn hình lớn hơn nhưng lại nhỏ gọn hơn",
      content2:
        "Với một màn hình gập, Samsung Galaxy Z Fold3 5G đã giải quyết bài toán đưa màn hình lớn lên một chiếc điện thoại di động. Trong trạng thái gập, Galaxy Z Fold3 5G thậm chí còn nhỏ hơn một chiếc smartphone thông thường, dễ dàng cho vào túi xách, túi quần, sử dụng bằng một tay.",
      content3:
        "Còn khi bạn mở màn hình gập, mọi thứ sẽ trở nên sống động hơn bao giờ hết với kích thước lớn tới 7,6 inch. Hơn nữa, đây còn là màn hình tỉ lệ vuông, cho diện tích sử dụng lớn gấp đôi so với smartphone thông thường.",
      imgtext3: imgsamsung3,
      text4: "Màn hình ngoài tiện lợi",
      content4:
        "Ngay cả khi trong trạng thái gập, bạn vẫn hoàn toàn có thể sử dụng Samsung Galaxy Z Fold3 5G bình thường với màn hình ngoài kích thước 6,2 inch. Chất lượng của màn hình này cũng đứng trong top đầu hiện nay với công nghệ Dynamic AMOLED 2X, tần số quét 120Hz, hiển thị tuyệt đẹp và siêu mượt mà.",
      content5:
        "Màn hình ngoài cho phép bạn sử dụng điện thoại tiện lợi hơn, trong những trường hợp cần thao tác nhanh bằng một tay mà không cần phải mở màn hình lớn.",
      imgtext4: imgsamsung4,
      text5: "Thế giới giải trí hoàn hảo",
      content6:
        "Thât khó tin khi chiếc điện thoại nằm gọn trong túi của bạn lại có thể mở ra một thế giới giải trí hoàn hảo. Bạn chỉ cần mở màn hình gập của Galaxy Z Fold3 5G ra một cách sành điệu, trước mắt sẽ là không gian hiển thị cực lớn Infinity Flex 7,6 inch, camera trước ẩn dưới màn hình, tạo nên những hình ảnh tuyệt đẹp không điểm khuyết. Trải nghiệm đọc báo, đọc sách, chơi game, xem phim của bạn thực sự sống động đến mức khó tin trên Z Fold3 5G.",
      imgtext5: imgsamsung5,
      text6: "Thiết kế siêu mỏng nhẹ, đơn giản nhưng đậm chất tinh tế",
      content7:
        "OPPO Reno6 5G có thiết kế siêu mỏng nhẹ với độ mỏng chỉ 7,59mm. Điện thoại được hoàn thiện theo ngôn ngữ thiết kế phẳng, vuông vắn, đơn giản nhưng không bao giờ lỗi thời, vừa mang đến dáng vẻ sang trọng, lại vừa cho cảm giác cầm nắm thoải mái. Máy được phủ lớp sơn OPPO Reno Glow độc đáo, đẹp lấp lánh nhưng không hề quá phô trương và đặc biệt không bám bẩn hay dấu vân tay. Công nghệ này đã được công nhận bởi hơn 20 bằng sáng chế, khiến cho OPPO Reno6 5G đẹp như một tác phẩm nghệ thuật.",
      imgtext6: imgsamsung6,
      text7: "Sử dụng điện thoại theo cách của riêng bạn",
      content8:
        "Màn hình Samsung Galaxy Z Fold3 5G có thể gập theo bất cứ góc độ nào bạn mong muốn, tạo nên trải nghiệm sử dụng điện thoại sáng tạo hơn bao giờ hết.",
      content9:
        "Bạn có thể gập theo dạng một chiếc laptop để nhập liệu trực quan; sử dụng camera chính để chụp ảnh selfie; vừa chụp ảnh vừa xem trước trên cùng một màn hình. Chính bạn sẽ quyết định cách sử dụng Galaxy Z Fold3 5G theo phong cách thú vị của riêng bạn.",
      imgtext7: imgsamsung7,
      text8: "Đẹp tuyệt tác, bền vững với thời gian",
      content10:
        "Samsung Galaxy Z Fold3 5G được chế tác từ những vật liệu cao cấp và bền bỉ nhất trong ngành công nghiệp smartphone. Phần khung viền được làm từ hợp kim nhôm Armor Alumium siêu bền, cả màn hình trong và màn hình ngoài đều được bảo vệ bằng kính cường lực Gorilla Glass Victus cứng cáp, cho khả năng chống trầy vượt trội gấp 4 lần cùng khả năng chống va đập khi rơi từ độ cao 2m.",
      content11:
        "Trong khi đó phần màn hình gập sử dụng kính Ultra Thin Glass siêu mỏng, là bước tiến lớn trong công nghệ màn hình gập, cho trải nghiệm gập mở linh hoạt hơn, đồng thời bền bỉ hơn 80% trước đây. Đặc biệt, Z Fold3 5G còn là chiếc điện thoại màn hình gập đầu tiên có thể kháng nước với chuẩn kháng nước IPX8.",
      imgtext8: imgsamsung8,
      text9: "Sáng tạo vô hạn với bút S Pen",
      content12:
        "S Pen đã từng thể hiện quyền năng tuyệt đỉnh trên dòng Galaxy Note, giờ đây với một màn hình lớn chưa từng thấy ở thế giới smartphone, S Pen sẽ mang đến sự sáng tạo vô hạn. Tha hồ ghi chú viết vẽ với những nét bút tự nhiên, mượt mà và chính xác trên không gian màn hình cực lớn, khả năng gập mở linh hoạt.",
      content13:
        "Nhờ S Pen, bạn có thể chia màn hình thành nhiều cửa sổ ứng dụng, sử dụng một cách trực quan và liền mạch. Dễ dàng thực hiện nhiều việc cùng lúc với sự kết hợp hoàn hảo của S Pen và Samsung Galaxy Z Fold3 5G.",
      imgtext9: imgsamsung9,
      text10: "Âm thanh chuẩn nhà hát",
      content13:
        "Không chỉ mãn nhãn với màn hình không điểm khuyết cực lớn 7,6 inch, bạn còn được đắm chìm trong thế giới âm thanh từ hệ thống loa stereo chân thực và công nghệ Dolby Atmos cho bạn chất âm cao cấp như đang ở trong rạp hát. Một rạp chiếu phim di động ngay trong túi của bạn, Samsung Galaxy Z Fold3 5G biến mọi điều không thể thành có thể.",
      imgtext10: imgsamsung10,
      text11: "Chơi game chưa bao giờ đã đến thế",
      content14:
        "Hãy thử tưởng tượng về việc trải nghiệm những tựa game đỉnh cao trên màn hình lớn gấp đôi thông thường, công nghệ Dynamic AMOLED 2X hiển thị sống động hàng đầu, tần số quét 120Hz siêu mượt và sức mạnh cấu hình tuyệt vời, mọi thứ quả thực rất đáng kinh ngạc trên Samsung Galaxy Z Fold3 5G.",
      content15:
        "Thưởng thức những hình ảnh sắc nét, những chuyển động cực nhanh, những hiệu ứng đồ họa chân thực được điều khiển bằng những thao tác mượt mà từ chính bạn, trải nghiệm chơi game chưa bao giờ hấp dẫn đến thế.",
      imgtext11: imgsamsung11,
      text12: "Chụp ảnh và quay video chuyên nghiệp",
      content16:
        "Với năm camera ở ba vị trí khác nhau, hai màn hình trong đó một màn hình có khả năng gập mở linh hoạt, Samsung Galaxy Z Fold3 5G mang tới sự sáng tạo không ngờ trong chụp ảnh và quay video. Việc chuyển đổi linh hoạt giữa các camera, sử dụng hai màn hình để xem trước giúp bạn có thể chụp ảnh, quay video ở nhiều góc độ, nhiều mục đích hơn.",
      content17:
        "Những công nghệ tiên tiến nhất trong nhiếp ảnh của Samsung như điểm ảnh kép Dual Pixel, chống rung quang học OIS đều được tích hợp trên Samsung Galaxy Z Fold3 5G, cho hình ảnh và video chất lượng đáng tin cậy.",
      imgtext12: imgsamsung12,
      text13: "Đầy đủ tính năng camera",
      content18:
        "Tất cả những tính năng camera hàng đầu đều có mặt trên Samsung Galaxy Z Fold3 5G. Từ chụp chân dung, chụp đêm cho đến chụp ảnh góc siêu rộng, chụp zoom quang học 2x, bạn đều có những bức ảnh rõ nét, màu sắc, độ sáng và độ tương phản hoàn hảo.",
      content19:
        "Bạn còn có thể thử tài đạo diễn nhờ khả năng quay video lấy nét chính xác, quay chuyển động nhanh hay cả quay video timelapse đầy lôi cuốn với những ánh đèn lung linh trong đêm tối.",

      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      cpu: "Snapdragon 888",
      detialtext1:
        "Màn hình chính: 7.6”, Màn hình phụ: 6.2”, HD+, Chính: Dynamic AMOLED 2X, phụ: Dynamic AMOLED 2X, 1768 x 2208 Pixel",
      detialtext2: "12.0 MP + 12.0 MP + 12.0 MP",
      detialtext3: "10.0 MP",
      detialtext4: "Snapdragon 888",
      detialtext5: "256 GB",

      screen: "Màn hình chính: 7.6”, Màn hình phụ: 6.2”",
      ram: "12 GB",
      rom: "258 GB",
      danhgia: "1 đánh giá",
      hoidap: "218 hỏi đáp",
      hoi: "218",

      screentitle:
        "Màn hình chính: 7.6”, Màn hình phụ: 6.2”, HD+, Chính: Dynamic AMOLED 2X, phụ: Dynamic AMOLED 2X, 1768 x 2208 Pixel",
      cameratitle: "12.0 MP + 12.0 MP + 12.0 MP",
      selfietitle: "	10.0 MP",
      ramtitle: "	12 GB",
      romtitle: "	256 GB",
      cputitle: "	Snapdragon 888",
      gputitle: "		--",
      pintitle: "4400 mAh",
      simtitle: "	1, 1 eSIM, 1 Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "	Việt Nam",
      time: "08/2021",
      count: 1,
    },
    {
      _id: "4",
      images: product_04,
      imagesdetial2: product_04_02,
      imagesdetial3: product_04_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Vivo Y21 4GB+1GB - 64GB",
      titledetial: "Vivo",
      saledes1: "Tặng Loa Tekin L6 áp dụng đến 20/10",
      saledes2: "Bảo hành 2 năm",
      saledes3:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes4:
        "Gói dịch vụ ưu tiên Z Pass Priority & phòng chờ hạng thương gia tại sân bay",
      saledes5: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes6: "Trúng 1.000 quà tặng đỉnh cao",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      slug: "Vivo-Y21-4GB+1GB-64GB",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "4290000",
      tragop: "546.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Helio P35",
      detialtext1: "6.51”, HD+, IPS LCD, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP",
      detialtext3: "8.0 MP",
      detialtext4: "Helio P35",
      detialtext5: "64 GB",
      screen: "6.51”",

      ram: "4GB + 1GB",

      rom: "64 GB",

      danhgia: "1 đánh giá",
      hoidap: "41 hỏi đáp",
      hoi: "41",
      screentitle: "6.51”, HD+, IPS LCD, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP",
      selfietitle: "8.0 MP",
      ramtitle: "	4GB + 1GB",
      romtitle: "64 GB",
      cputitle: "Helio P35",
      gputitle: "IMG PowerVR GE8320",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Trung Quốc",
      time: "08/2021",
      count: 1,
    },
    {
      _id: "5",
      images: product_05,
      imagesdetial2: product_05,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi POCO X3 Pro NFC 8GB-256GB",
      titledetial: "Xiaomi",
      slug: "Xiaomi-POCO-X3-Pro-NFC-8GB-256GB",
      saledes1: "Giảm ngay 700.000đ",
      saledes2: "Trả góp 0%",
      saledes3: "Bảo hành 18 tháng",
      saledes4:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes5: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes6: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "7290000",
      del: "7990000₫",
      tragop: "919.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Snapdragon 860",
      detialtext1: "6.67”, FHD+, IPS LCD, 1080 x 2400 Pixel",
      detialtext2: "48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "20.0 MP",
      detialtext4: "Snapdragon 860",
      detialtext5: "256 GB",
      screen: "6.67”",

      ram: "8 GB",

      rom: "256 GB",
      danhgia: "5 đánh giá",
      hoidap: "2658 hỏi đáp",
      hoi: "2658",

      screentitle: "6.67”, FHD+, IPS LCD, 1080 x 2400 Pixel",
      cameratitle: "48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "20.0 MP",
      ramtitle: "		8 GB",
      romtitle: "256 GB",
      cputitle: "Snapdragon 860",
      gputitle: "Adreno 640",
      pintitle: "5160 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Trung Quốc",
      time: "04/2021",

      count: 1,
    },
    {
      _id: "6",
      images: product_06,
      imagesdetial2: product_06_01,
      imagesdetial3: product_06_02,
      imagesdetial4: product_06_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy Z Flip 5G 128GB",
      titledetial: "Samsung",
      slug: "Samsung-Galaxy-Z-Flip-5G-128GB",
      saledes1:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes2:
        "Gói dịch vụ ưu tiên Z Pass Priority & phòng chờ hạng thương gia tại sân bay",
      saledes3: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes4: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes5: "Ưu đãi dán màn hình 01 năm",
      saledes6: "Giảm 10% Tai nghe Galaxy Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "24990000",
      tragop: "1.179.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Snapdragon 888",
      detialtext1: "6.9”, 2K+, Dynamic AMOLED 2X, 1440 x 3088 Pixel",
      detialtext2: "108.0 MP + 12.0 MP + 12.0 MP",
      detialtext3: "10.0 MP",
      detialtext4: "Exynos 990",
      detialtext5: "256 GB",
      screen: "Màn hình chính: 6.7”, Màn hình phụ: 1.9”",

      ram: "8 GB",

      rom: "128 GB",

      danhgia: "38 đánh giá",
      hoidap: "1018 hỏi đáp",
      hoi: "1018",

      screentitle:
        "Màn hình chính: 6.7”, Màn hình phụ: 1.9”, FHD+, Chính: Dynamic AMOLED, phụ: Super AMOLED, 1080 x 2636 Pixel",
      cameratitle: "12.0 MP + 12.0 MP",
      selfietitle: "10.0 MP",
      ramtitle: "		8 GB",
      romtitle: "128 GB",
      cputitle: "Snapdragon 888",
      gputitle: "--",
      pintitle: "3300 mAh",
      simtitle: "1, 1 eSIM, 1 Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Việt Nam",
      time: "08/2021",

      count: 1,
    },
    {
      _id: "7",
      images: product_07,
      imagesdetial2: product_07_01,
      imagesdetial3: product_07_02,
      imagesdetial4: product_07_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy A22 5G",
      titledetial: "Samsung",
      slug: "Samsung-Galaxy-A22-5G",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Galaxy trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Galaxy Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "5899000",
      del: "6299000",
      tragop: "747.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "MediaTek Dimensity 700",
      detialtext1: "6.6”, FHD+, TFT LCD, 1080 x 2400 Pixel",
      detialtext2: "48.0 MP + 5.0 MP + 2.0 MP",
      detialtext3: "8.0 MP",
      detialtext4: "MediaTek Dimensity 700",
      detialtext5: "128 GB",
      screen: "6.6”",

      ram: "6 GB",

      rom: "128 GB",

      danhgia: "8 đánh giá",
      hoidap: "385 hỏi đáp",
      hoi: "385",

      screentitle: "6.6”, FHD+, TFT LCD, 1080 x 2400 Pixel",
      cameratitle: "48.0 MP + 5.0 MP + 2.0 MP",
      selfietitle: "8.0 MP",
      ramtitle: "		6 GB",
      romtitle: "128 GB",
      cputitle: "MediaTek Dimensity 700",
      gputitle: "ARM Mali-G57 MC2",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Việt Nam",
      time: "07/2021",

      count: 1,
    },
    {
      _id: "8",
      images: product_08,
      imagesdetial2: product_08_02,
      imagesdetial3: product_08_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Realme C21y 3GB - 32GB ",
      slug: "Realme-C21y-3GB-32GB ",
      titledetial: "Realme",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Realme trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Realme Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "3490000",
      tragop: "446.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Unisoc T610",
      detialtext1: "6.5”, HD+, IPS LCD, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "5.0 MP",
      detialtext4: "Unisoc T610",
      detialtext5: "32 GB",
      screen: "6.5”",

      ram: "3 GB",

      rom: "32 GB",

      danhgia: "1 đánh giá",
      hoidap: "17 hỏi đáp",
      hoi: "17",

      screentitle: "6.5”, HD+, IPS LCD, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "5.0 MP",
      ramtitle: "		3 GB",
      romtitle: "32 GB",
      cputitle: "Unisoc T610",
      gputitle: "Mali-G52 MC2",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Việt Nam",
      time: "06/2021",

      count: 1,
    },
    {
      _id: "9",
      images: product_09,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 13 Pro Max 128GB",
      slug: "iPhone-13-Pro-Max-128GB",
      titledetial: "iPhone",
      saledes1: "Tặng Loa Tekin L6 áp dụng đến 20/10",
      saledes2: "Bảo hành 2 năm",
      saledes3:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy",
      saledes4:
        "Giảm ngay 120.000đ vòng đeo tay thông minh Oppo Band khi mua kèm ĐTDĐ Oppo",
      saledes5: "Thu cũ đổi mới - Trợ giá ngay 15%",
      saledes6: "Trúng 1.000 quà tặng đỉnh cao",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "33990000đ",
      tragop: "1.179.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A15 Bionic",
      detialtext1: "6.7” Super Retina XDR",
      detialtext2:
        "3 Camera: Ống kính góc rộng f/1.5 - Tele f/2.8 - Siêu rộng f/1.8",
      detialtext3: "5.0 MP",
      detialtext4: "Chip A15 Bionic (5nm)",
      detialtext5: "128 GB",
      screen: "6.7”",

      ram: "6 GB",

      rom: "128 GB",
      danhgia: "1 đánh giá",
      hoidap: "1020 hỏi đáp",
      hoi: "1020",

      screentitle: "	6.7” Super Retina XDR",
      cameratitle: "13.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "5.0 MP",
      ramtitle: "		6 GB",
      romtitle: "128 GB",
      cputitle: "Unisoc T610",
      gputitle: "Mali-G52 MC2",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Việt Nam",
      time: "06/2021",

      count: 1,
    },
    {
      _id: "10",
      images: product_10,
      imagesdetial2: product_10_02,
      imagesdetial3: product_10_03,
      imagesdetial4: product_10_04,
      imagesdetial5: product_10_05,
      imagesdetial6: product_10_06,

      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone 11 64GB",
      slug: "iPhone-11-64GB",
      titledetial: "iPhone",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng iPhone trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe iPhone Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "16999000",
      tragop: "1.983.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A13 Bionic",
      detialtext1: "6.1”, Liquid Retina HD, IPS LCD, 828 x 1792 Pixel",
      detialtext2: "12.0 MP + 12.0 MP",
      detialtext3: "12.0 MP",
      detialtext4: "A13 Bionic",
      detialtext5: "64 GB",
      screen: "6.1”",

      ram: "4 GB",

      rom: "64 GB",

      danhgia: "159 đánh giá",
      hoidap: "4834 hỏi đáp",
      hoi: "4834",

      screentitle: "	6.1”, Liquid Retina HD, IPS LCD, 828 x 1792 Pixel",
      cameratitle: "12.0 MP + 12.0 MP",
      selfietitle: "12.0 MP",
      ramtitle: "		4 GB",
      romtitle: "64 GB",
      cputitle: "A13 Bionic",
      gputitle: "Apple GPU 4 nhân",
      pintitle: "3110 mAh",
      simtitle: "2, Nano SIM2, 1 eSIM, 1 Nano SIM",
      hedieuhanh: "	iOS 14",
      xuatxu: "Trung Quốc",
      time: "09/2019",

      count: 1,
    },
    {
      _id: "11",
      images: product_11,
      imagesdetial2: product_11_02,
      imagesdetial3: product_11_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Nokia C30 3GB-32GB ",
      slug: "Nokia-C30-3GB-32GB ",
      titledetial: "Nokia",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Nokia trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Nokia Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "2790000",
      tragop: "509.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "SC9863A",
      detialtext1: "6.82”, HD+, IPS LCD, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP",
      detialtext3: "5.0 MP",
      detialtext4: "SC9863A",
      detialtext5: "32 GB",
      screen: "6.82”",

      ram: "3 GB",

      rom: "32 GB",

      danhgia: "4 đánh giá",
      hoidap: "212 hỏi đáp",
      hoi: "212",

      screentitle: "6.82”, HD+, IPS LCD, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP",
      selfietitle: "5.0 MP",
      ramtitle: "3 GB",
      romtitle: "32 GB",
      cputitle: "SC9863A  ",
      gputitle: "--",
      pintitle: "6000 mAh",
      simtitle: "2, 2 Nano SIM",
      hedieuhanh: "Android 11",
      xuatxu: "Trung Quốc",
      time: "--",

      count: 1,
    },
    {
      _id: "12",
      images: product_12,
      imagesdetial2: product_12_02,
      imagesdetial3: product_12_03,
      imagesdetial4: product_12_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi Redmi 10 4GB-128GB",
      slug: "Xiaomi-Redmi-10-4GB-128GB ",
      titledetial: "Xiaomi",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Xiaomi trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Xiaomi Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "429.000",
      tragop: "546.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "MediaTek Helio G88",
      screen: "6.5”",
      ram: "4 GB",
      rom: "128 GB",
      danhgia: "2 đánh giá",
      hoidap: "1210 hỏi đáp",
      hoi: "1210",

      screentitle: "6.5”, FHD+, IPS LCD, 1080 x 2400 Pixel",
      cameratitle: "50.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "8.0 MP",
      ramtitle: "4 GB",
      romtitle: "128 GB",
      cputitle: "MediaTek Helio G88 ",
      gputitle: "ARM Mali-G52 MC2",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 11",
      xuatxu: "Trung Quốc",
      time: "	08/2021",

      count: 1,
      detialtext1: "6.5”, FHD+, IPS LCD, 1080 x 2400 Pixel",
      detialtext2: "50.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "8.0 MP",
      detialtext4: "MediaTek Helio G88",
      detialtext5: "128 GB",
    },

    {
      _id: "13",
      images: product_13,
      imagesdetial3: product_13_02,
      imagesdetial3: product_13_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy Note 20 Ultra",
      slug: "Samsung-Galaxy-Note-20 Ultra ",
      titledetial: "Samsung",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Samsung trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Samsung Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "19999000",
      del: "20999000",
      tragop: "1.179.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Exynos 990",
      screen: "6.9”",
      ram: "8 GB",
      rom: "256 GB",
      danhgia: "38 đánh giá",
      hoidap: "1018 hỏi đáp",
      hoi: "1018",

      screentitle: "6.9”, 2K+, Dynamic AMOLED 2X, 1440 x 3088 Pixel",
      cameratitle: "108.0 MP + 12.0 MP + 12.0 MP",
      selfietitle: "10.0 MP",
      ramtitle: "8 GB",
      romtitle: "256 GB",
      cputitle: "Exynos 990",
      gputitle: "ARM Mali-G77 MP11",
      pintitle: "4500 mAh",
      simtitle: "2, 2 Nano SIM hoặc 1 eSIM, 1 Nano SIM",
      hedieuhanh: "Android 10.0",
      xuatxu: "	Việt Nam",
      time: "	08/2020",

      count: 1,
      detialtext1: "6.9”, 2K+, Dynamic AMOLED 2X, 1440 x 3088 Pixel",
      detialtext2: "108.0 MP + 12.0 MP + 12.0 MP",
      detialtext3: "10.0 MP",
      detialtext4: "Exynos 990",
      detialtext5: "256 GB",
    },

    {
      _id: "14",
      images: product_14,
      imagesdetial3: product_14_02,
      imagesdetial3: product_14_03,
      imagesdetial3: product_14_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Vsmart Aris 8GB-128GB ",
      slug: "Vsmart-Aris-8GB-128GB ",
      titledetial: "Vsmart",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Vsmart trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Vsmart Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "4990000",
      del: "6690000",
      tragop: "633.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Unisoc T610",
      screen: "6.39”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "14 đánh giá",
      hoidap: "1051 hỏi đáp",
      hoi: "1051",

      screentitle: "6.39”, FHD+, AMOLED, 1080 x 2340 Pixel",
      cameratitle: "64.0 MP + 8.0 MP + 8.0 MP + 2.0 MP",
      selfietitle: "20.0 MP",
      ramtitle: "8 GB",
      romtitle: "128 GB",
      cputitle: "Adreno 618",
      gputitle: "ARM Mali-G77 MP11",
      pintitle: "4000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 10.0",
      xuatxu: "	Việt Nam",
      time: "	01/2018",

      count: 1,
      detialtext1: "6.39”, FHD+, AMOLED, 1080 x 2340 Pixel",
      detialtext2: "64.0 MP + 8.0 MP + 8.0 MP + 2.0 MP",
      detialtext3: "20.0 MP",
      detialtext5: "128 GB",
    },
    {
      _id: "15",
      images: product_15,
      imagesdetial2: product_15_02,
      imagesdetial3: product_15_03,
      imagesdetial4: product_15_04,
      imagesdetial5: product_15_05,
      imagesdetial6: product_15_06,
      imagesdetial7: product_15_07,

      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "iPhone XR 64GB ",
      slug: "iPhone-XR-64GB",
      titledetial: "iPhone",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng iPhone trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe iPhone Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "12499000",
      del: "12999000",
      tragop: "1.265.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "A12 Bionic",
      screen: "6.1”",
      ram: "3 GB",
      rom: "64 GB",
      danhgia: "216 đánh giá",
      hoidap: "3125 hỏi đáp",
      hoi: "3125",

      screentitle: "6.5”, FHD+, Super AMOLED, 1080 x 2400 Pixel",
      cameratitle: "64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",
      selfietitle: "32.0 MP",
      ramtitle: "8 GB",
      romtitle: "128 GB",
      cputitle: "Snapdragon 778G",
      gputitle: "Adreno 642L",
      pintitle: "4500 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 10.0",
      xuatxu: "	Việt Nam",
      time: "		--",

      count: 1,
      detialtext1: "6.1”, Liquid Retina HD, IPS LCD, 828 x 1792 Pixel",
      detialtext2: "12.0 MP",
      detialtext3: "7.0 MP",
      detialtext4: "A12 Bionic",
      detialtext5: "64 GB",
    },
    {
      _id: "16",
      images: product_16,
      imagesdetial2: product_16_02,
      imagesdetial2: product_16_03,
      imagesdetial2: product_16_04,
      imagesdetial2: product_16_05,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Samsung Galaxy A52s 5G ",
      slug: "Samsung-Galaxy-A52s-5G",
      titledetial: "Samsung",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Samsung trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Samsung Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "10990000",
      tragop: "1.111.000₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Snapdragon 778G",
      screen: "6.5”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "7 đánh giá",
      hoidap: "204 hỏi đáp",
      hoi: "204",

      screentitle: "6.5”, FHD+, Super AMOLED, 1080 x 2400 Pixel",
      cameratitle: "64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP ",
      selfietitle: "32.0 MP",
      ramtitle: "8 GB",
      romtitle: "128 GB",
      cputitle: "Snapdragon 778G",
      gputitle: "Adreno 642L",
      pintitle: "4500 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 11",
      xuatxu: "	Việt Nam",
      time: "		--",

      count: 1,
      detialtext1: "6.5”, FHD+, Super AMOLED, 1080 x 2400 Pixel",
      detialtext2: "64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",
      detialtext3: "32.0 MP",
      detialtext4: "Snapdragon 778G",
      detialtext5: "128 GB",
    },
    {
      _id: "17",
      images: product_17,
      imagesdetial2: product_17_02,
      imagesdetial3: product_17_03,

      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "OPPO A54 4GB-128GB ",
      slug: "OPPO-A54-4GB-128GB ",
      titledetial: "OPPO",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng OPPO trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe OPPO Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "4690000",
      tragop: "595.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Helio P35",
      screen: "6.5”",
      ram: "4 GB",
      rom: "128 GB",
      danhgia: "1 đánh giá",
      hoidap: "176 hỏi đáp",
      hoi: "176",

      screentitle: "6.5”, HD+, LCD, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP + 2.0 MP ",
      selfietitle: "16.0 MP",
      ramtitle: "4 GB",
      romtitle: "128 GB",
      cputitle: "Helio P35",
      gputitle: "IMG GE8320",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 10.0",
      xuatxu: "Trung Quốc",
      time: "	04/2021",

      count: 1,
      detialtext1: "6.5”, HD+, LCD, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "16.0 MP",
      detialtext4: "Helio P35",
      detialtext5: "128 GB",
    },
    {
      _id: "18",
      images: product_18,
      imagesdetial2: product_18_02,
      imagesdetial3: product_18_03,
      imagesdetial4: product_18_04,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi Redmi Note 10S 8GB-128GB ",
      slug: "Xiaomi-Redmi-Note-10S-8GB-128GB  ",
      titledetial: "Xiaomi",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Xiaomi trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Xiaomi Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "6490000",
      tragop: "819.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "MediaTek Helio G95",
      screen: "6.43”",
      ram: "8 GB",
      rom: "128 GB",
      danhgia: "2 đánh giá",
      hoidap: "152 hỏi đáp",
      hoi: "152",

      screentitle: "6.43”, FHD+, AMOLED, 1080 x 2400 Pixel",
      cameratitle: "64.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "13.0 MP",
      ramtitle: "8 GB",
      romtitle: "128 GB",
      cputitle: "MediaTek Helio G95",
      gputitle: "Mali-G76 MC4",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 11",
      xuatxu: "Trung Quốc",
      time: "	05/2021",

      count: 1,
      detialtext1: "6.43”, FHD+, AMOLED, 1080 x 2400 Pixel",
      detialtext2: "64.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "13.0 MP",
      detialtext4: "MediaTek Helio G95",
      detialtext5: "128 GB",
    },
    {
      _id: "19",
      images: product_19,
      imagesdetial2: product_19_02,
      imagesdetial3: product_19_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Vivo Y12s 2021 3GB-32GB  ",
      slug: "Vivo-Y12s-2021-3GB-32GB ",
      titledetial: "Vivo",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Vivo trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Vivo Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "3490000",
      tragop: "863.500₫",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Snapdragon 439",
      screen: "6.51”",
      ram: "3 GB",
      rom: "32 GB",
      danhgia: "1 đánh giá",
      hoidap: "171 hỏi đáp",
      hoi: "171",

      screentitle: "6.51”, HD+, IPS, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP",
      selfietitle: "8.0 MP",
      ramtitle: "3 GB",
      romtitle: "32 GB",
      cputitle: "Snapdragon 439",
      gputitle: "Adreno 505",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 11",
      xuatxu: "Trung Quốc",
      time: "		03/2021",

      count: 1,
      detialtext1: "6.51”, HD+, IPS, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP",
      detialtext3: "8.0 MP",
      detialtext4: "Snapdragon 439",
      detialtext5: "32 GB",
    },
    {
      _id: "20",
      images: product_20,
      imagesdetial2: product_20_02,
      imagesdetial3: product_20_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Xiaomi Redmi 9C 3GB-64GB",
      slug: "Xiaomi Redmi-9C-3GB-64GB",
      tragop: "786.000₫",
      titledetial: "Realme",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Realme trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Realme Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "2990000",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Unisoc T610",
      screen: "6.5”",
      ram: "3 GB",
      rom: "32 GB",
      danhgia: "2 đánh giá",
      hoidap: "797 hỏi đáp",
      hoi: "797",

      screentitle: "6.53”, HD+, IPS LCD, 720 x 1600 Pixel",
      cameratitle: "13.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "5.0 MP",
      ramtitle: "3 GB",
      romtitle: "64 GB",
      cputitle: "Mediatek Helio G35",
      gputitle: "IMG PowerVR GE8320",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "Android 10.0",
      xuatxu: "Trung Quốc",
      time: "	07/2020",

      count: 1,
      detialtext1: "6.53”, HD+, IPS LCD, 720 x 1600 Pixel",
      detialtext2: "13.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "5.0 MP",
      detialtext4: "Mediatek Helio G35",
      detialtext5: "64 GB",
    },

    {
      _id: "21",
      images: product_21,
      imagesdetial2: product_21_02,
      imagesdetial3: product_21_03,
      imgpay1: product_pay_01,
      imgpay2: product_pay_02,
      imgpay3: product_pay_03,
      title: "Realme 8 8GB - 128GB",
      slug: "Realme-8-8GB-128GB ",
      titledetial: "Xiaomi",
      saledes1: "Trả góp 0%",
      saledes2:
        "Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy Xem chi tiết",
      saledes3: "Quà tặng Xiaomi trị giá 480.000đ Xem chi tiết",
      saledes4: "Thu cũ đổi mới - Trợ giá ngay 15% Xem chi tiết",
      saledes5: "Trúng 1.000 quà tặng đỉnh cao Xem chi tiết",
      saledes6: "Giảm 10% Tai nghe Xiaomi Buds2 khi mua kèm máy",
      imgpay2: product_pay_02,
      titlepay2: "Thanh toán VNPAY-QR",
      textpay2:
        "Giảm ngay 400.000đ khi thanh toán 100% qua VNPAY-QR (Giá trị thanh toán cuối cùng sau khi áp dụng các khuyến mại khác trên 8 triệu)",
      imgpay3: product_pay_03,
      titlepay3: "Ưu đãi dành cho chủ thẻ tín dụng FE Credit",
      textpay3:
        "Giảm thêm 500.000đ khi thanh toán trả góp Online 100% bằng thẻ tín dụng FE Credit",
      content: "Giam thêm 500.000đ qua thẻ tín dụng FECredit",
      price: "6990000",
      tragop: "1.898.500đ",
      installment: "Trả góp 0%",
      sale: "Gỉam 4.000.000đ",
      cpu: "Mediatek Helio G35",
      screen: "6.53”",
      ram: "3 GB",
      rom: "64 GB",
      danhgia: "1 đánh giá",
      hoidap: "90 hỏi đáp",
      hoi: "90",

      screentitle: "6.4”, FHD+, Super AMOLED, 1080 x 2400 Pixel",
      cameratitle: "64.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      selfietitle: "16.0 MP",
      ramtitle: "8 GB",
      romtitle: "128 GB",
      cputitle: "MediaTek Helio G95",
      gputitle: "Mali-G76 MC4",
      pintitle: "5000 mAh",
      simtitle: "2, Nano SIM",
      hedieuhanh: "	Android 11",
      xuatxu: "Trung Quốc",
      time: "05/2021",

      count: 1,
      detialtext1: "6.4”, FHD+, Super AMOLED, 1080 x 2400 Pixel",
      detialtext2: "64.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
      detialtext3: "16.0 MP",
      detialtext4: "MediaTek Helio G95",
      detialtext5: "128 GB",
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
