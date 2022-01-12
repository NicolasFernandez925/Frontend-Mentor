import React from "react";
import FsLightbox from "fslightbox-react";
import imagen1 from "../assets/image-product-1.jpg";
import imagen2 from "../assets/image-product-2.jpg";
import imagen3 from "../assets/image-product-3.jpg";
import imagen4 from "../assets/image-product-4.jpg";

interface IProps {
  images: Array<String>;
  imagesNode: JSX.Element[];
  toggler: boolean;
}

export const Ligthbox = ({ images, imagesNode, toggler }: IProps) => {
  return (
    <div className="carousel__items_product">
      <FsLightbox
        toggler={toggler}
        sources={[imagen1, imagen2, imagen3, imagen4]}
      />

      <div className="row_item">{images !== [] && imagesNode}</div>
    </div>
  );
};
