import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import useProduct from "../hooks/useProduct";
import { Ligthbox } from "./Ligthbox";
import useSlider from "./../hooks/useSlider";

export const Carousel: React.FC = () => {
  const [toggler, setToggler] = useState<boolean>(false);
  const { stateProduct } = useProduct();

  const {
    product: { images },
  } = stateProduct;

  let pathImages: String[] = [];

  let imagesNode: JSX.Element[] = images.map(
    (nameImg: String, index: number) => {
      pathImages.push(`../assets/${nameImg}`);
      return (
        <img
          onClick={() => setToggler(!toggler)}
          key={index}
          className="img__item__carousel"
          src={require(`../assets/${nameImg}`)}
          alt="Product Item"
        />
      );
    }
  );

  const { index, prevImage, nextImage } = useSlider<String>(pathImages);

  return (
    <>
      <div className="container__img__carousel">
        <img
          className="img_product__carousel"
          src={images[index] ? require(`../assets/${images[index]}`) : ""}
          alt=""
        />
      </div>
      <button onClick={prevImage} className="btn_prev_img">
        <MdArrowBackIosNew className="icon__prev" />
      </button>
      <button onClick={nextImage} className="btn_next_img">
        <MdArrowForwardIos className="icon_next" />
      </button>
      <Ligthbox images={images} imagesNode={imagesNode} toggler={toggler} />
    </>
  );
};
