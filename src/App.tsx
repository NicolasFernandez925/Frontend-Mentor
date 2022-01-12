import React from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import { ProductInfo } from "./components/ProductInfo";
import { Header } from "./components/Header";
import { ProductProvider } from "./context/product/ProductProvider";

export const App: React.FC = () => {
  return (
    <ProductProvider>
      <div className="container">
        <Header />
        <div className="main">
          <div className="container__carousel">
            <Carousel />
          </div>
          <div className="container__info__product">
            <ProductInfo />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
