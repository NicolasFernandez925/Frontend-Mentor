import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { descount } from "../helper/descount";
import IProduct from "./../interface/product";

interface IProps {
  product: IProduct;
  quantity: number;
  removeProductCart: (id: String) => void;
}

export const ProductItem = React.memo(
  ({ product, quantity, removeProductCart }: IProps) => {
    return (
      <div className="row_item">
        <img
          className="img__product"
          src={require("../assets/image-product-1.jpg")}
          alt="Product"
        />

        <div className="details__item">
          <p className="text__detail__product">Fall limited edition Sneaker</p>
          <p className="text__detail__product">
            ${descount(product.price, product.discount)} x {quantity}
            <span className="price__product">
              ${descount(product.price, product.discount) * quantity}
            </span>
          </p>
        </div>
        <MdDelete
          onClick={() => removeProductCart(product.id)}
          className="icon__delete"
        />
      </div>
    );
  }
);
