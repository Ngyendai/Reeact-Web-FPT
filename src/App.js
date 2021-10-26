import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DataProSale } from "./assets/fake-data/Products/data-ProSale";
import { DataLaptop } from "./assets/fake-data/Products/data-Laptop";
import { DataTablet } from "./assets/fake-data/Products/data-Tablet";
import { DataPC } from "./assets/fake-data/Products/data-pc";
import { DataAccessory } from "./assets/fake-data/Products/data-accessory";

import { DataApple } from "./assets/fake-data/Products/data-apple";
import Routes from "./Routes/Routes";
import Footer from "./component/FE/Footer";
import Header from "./component/FE/Header";

import Menu from "./component/FE/Menu";

import "./sass/Index.scss";
import { DataProMoblet } from "./assets/fake-data/Products/data-proMoblet";
function App() {
  return (
    <div className="App">
      <DataProSale>
        <DataProMoblet>
          <DataLaptop>
            <DataApple>
              <DataPC>
                <DataAccessory>
                  <DataTablet>
                    <BrowserRouter>
                      <Route>
                        <div>
                          <Header />
                          <Menu />

                          <div className="container">
                            <div className="main">
                              <Routes />
                            </div>
                          </div>
                          <Footer />
                        </div>
                      </Route>
                    </BrowserRouter>
                  </DataTablet>
                </DataAccessory>
              </DataPC>
            </DataApple>
          </DataLaptop>
        </DataProMoblet>
      </DataProSale>
    </div>
  );
}

export default App;
