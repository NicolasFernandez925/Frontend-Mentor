import React, { useEffect } from "react";
import IProduct from "../interface/product";
import { ProductItem } from "./ProductItem";
import useProduct from "./../hooks/useProduct";

interface IProps {
  toggle: boolean;
}

export const Cart = React.memo(({ toggle }: IProps) => {
  const { stateProduct, emptyCart, removeProductCart } = useProduct();
  const { cart, quantity } = stateProduct;

  return (
    <div
      className={
        toggle
          ? "items__cart__active box__cart"
          : "items__cart__desactive box__cart"
      }
    >
      <p className="tittle__cart">Cart</p>
      <hr className="line__cart" />
      <div className="container__details__item__cart">
        {quantity !== 0 ? (
          cart.map((item: IProduct) => (
            <ProductItem
              removeProductCart={removeProductCart}
              key={+item.id}
              product={item}
              quantity={quantity}
            />
          ))
        ) : (
          <p className="error__cart">Product not found in cart</p>
        )}
      </div>
      {quantity > 0 && (
        <button onClick={() => emptyCart()} className="btn__checkout">
          Clear all
        </button>
      )}
    </div>
  );
});
