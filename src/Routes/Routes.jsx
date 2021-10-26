import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import DetailSale from "../pages/Products/DetialSale";
import DetailMoblet from "../pages/Products/DetialMoblet";
import DetailLaptop from "../pages/Products/DetialLaptop";
import DetailTablet from "../pages/Products/DetialTablet";
import Catalogdienthoai from "../pages/Catalog/CatalogDienthoai";
import CartLaptop from "../pages/Cart/CartLaptop";
import CatalogLaptop from "../pages/Catalog/CatalogLaptop";
import CatalogApple from "../pages/Catalog/CatalogApple";
import CatalogPC from "../pages/Catalog/CatalogPc";
import CatalogAccessory from "../pages/Catalog/CatalogAccessory";
import CatalogMachine from "../pages/Catalog/CatalogMachine";
import CatalogTablet from "../pages/Catalog/CatalogTablet";
import CatalogSim from "../pages/Catalog/CatalogSim";
import CatalogSale from "../pages/Catalog/CatalogSale";
import CatalogInsta from "../pages/Catalog/CatalogInstallment";
import CartTablet from "../pages/Cart/CartTablet";
import CartSale from "../pages/Cart/CartSale";
import CartMoblet from "../pages/Cart/CartMoblet";
import DetailPC from "../pages/Products/DetialPC";
import DetailAccessory from "../pages/Products/DetialAccessory";
import DetailApple from "../pages/Products/DetialApple";
import CartPC from "../pages/Cart/CartPC";
import CartApple from "../pages/Cart/CartApple";
import CartAccessory from "../pages/Cart/CartAccessory";

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/san-pham/:id" exact component={DetailSale}></Route>
        <Route path="/dien-thoai/:id" exact component={DetailMoblet}></Route>
        <Route path="/lap-top/:id" exact component={DetailLaptop}></Route>
        <Route path="/may-tinh-bang/:id" exact component={DetailTablet}></Route>
        <Route path="/pc/:id" exact component={DetailPC}></Route>
        <Route path="/phu-kien/:id" exact component={DetailAccessory}></Route>
        <Route path="/apple/:id" exact component={DetailApple}></Route>
        <Route
          path="/dien-thoai-di-dong"
          exact
          component={Catalogdienthoai}
        ></Route>
        <Route path="/Laptop" exact component={CatalogLaptop}></Route>
        <Route path="/apple" exact component={CatalogApple}></Route>
        <Route path="/pc" exact component={CatalogPC}></Route>
        <Route path="/phu-kien" exact component={CatalogAccessory}></Route>
        <Route path="/may-cu-gia-re" exact component={CatalogMachine}></Route>
        <Route path="/may-tinh-bang" exact component={CatalogTablet}></Route>
        <Route path="/sim-so-dep" exact component={CatalogSim}></Route>
        <Route path="/khuyen-mai" exact component={CatalogSale}></Route>
        <Route path="/tra-gop-uu-dai" exact component={CatalogInsta}></Route>
        <Route path="/gio-hang" exact component={CartSale}></Route>
        <Route path="/gio-hang-laptop" exact component={CartLaptop}></Route>
        <Route path="/gio-hang-dien-thoai" exact component={CartMoblet}></Route>
        <Route
          path="/gio-hang-may-tinh-bang"
          exact
          component={CartTablet}
        ></Route>
        <Route path="/gio-hang-pc" exact component={CartPC}></Route>
        <Route path="/gio-hang-apple" exact component={CartApple}></Route>
        <Route
          path="/gio-hang-phu-kien"
          exact
          component={CartAccessory}
        ></Route>
      </Switch>
    </div>
  );
};

export default Routes;
