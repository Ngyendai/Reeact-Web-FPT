import React from "react";
import productData from "../assets/fake-data/data-products";
import Grid from "../component/FE/Grid";
import Helmet from "../component/FE/Helmet";
import ProductCard from "../component/FE/ProductCart";
import ProSale from "../component/FE/Products/ProSale";
import Section, { SectionBody, SectionTitle } from "../component/FE/Section";
import { Link } from "react-router-dom";
import banner from "../images/banner.jpg";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import Accessory from "../component/FE/Accessory";
import Heading from "../component/FE/Heading";
import { DataProSale } from "../assets/fake-data/Products/data-ProSale";
import { DataProMoblet } from "../assets/fake-data/Products/data-proMoblet";
import ProMoblet from "../component/FE/Products/ProMoblet";
import { DataLaptop } from "../assets/fake-data/Products/data-Laptop";
import ProLaptop from "../component/FE/Products/ProLaptop";
import { DataTablet } from "../assets/fake-data/Products/data-Tablet";
import ProTablet from "../component/FE/Products/ProTablet";
import Slider from "../component/FE/Slider";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* sale */}
      <Slider />
      <Heading />
      <DataProSale>
        <ProSale />
      </DataProSale>
      {/*end sale */}

      {/* bannertop*/}
      <div className="">
        <Link to="/catalog">
          <img src={banner} alt="" />
        </Link>
      </div>
      {/*end bannertop */}

      {/* moblet */}
      <DataProMoblet>
        <ProMoblet />
      </DataProMoblet>
      {/*end moblet */}

      {/* laptop */}
      {/* moblet */}
      <DataLaptop>
        <ProLaptop />
      </DataLaptop>
      {/*end moblet */}
      {/*end laptop */}

      {/* tablet */}
      <DataTablet>
        <ProTablet />
      </DataTablet>
      {/*end moblet */}
      {/*end tablet */}

      {/* banner center*/}
      <div className="container__banner">
        <Link>
          <img src={banner1} alt="" />
        </Link>
        <Link>
          <img src={banner2} alt="" />
        </Link>
      </div>
      {/*end banner center*/}

      {/* tablet */}
      <Section>
        <SectionTitle>
          <div className="section_title">
            <h4>PHỤ KIỆN HOT</h4>
            <Link>Xem tất cả</Link>
          </div>
        </SectionTitle>
        {/*Bước 2*/}
        <SectionBody className="accessory">
          <Grid col={4} mdCol={2} smCol={1} gap={0}>
            <Accessory />
          </Grid>
        </SectionBody>
      </Section>
      {/*end tablet */}

      {/* banner bottom*/}
      <div className="container__banner__bottom">
        <Link>
          <img src={banner3} alt="" />
        </Link>
        <Link>
          <img src={banner4} alt="" />
        </Link>
        <Link>
          <img src={banner5} alt="" />
        </Link>
      </div>
      {/*end banner bottom*/}
    </Helmet>
  );
};

export default Home;
