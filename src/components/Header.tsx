import iconMenu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import iconCart from "../assets/icon-cart.svg";
import { MdClose } from "react-icons/md";

import { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import useProduct from "../hooks/useProduct";
import IProduct from "./../interface/product";

export const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { stateProduct, emptyCart } = useProduct();
  const { quantity, cart } = stateProduct;

  const closeModalCart = (e: any) => {
    e.preventDefault();
    let element = document.querySelector(".navbar") as HTMLElement;
    const target = e.target;
    if (!element.contains(target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeModalCart);

    return () => {
      window.removeEventListener("click", closeModalCart);
    };
  }, []);

  const toggleCart = (): void => {
    setToggle(!toggle);
  };

  const openMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div
        onClick={() => openMenu()}
        className={`${menu ? "backgound__opacity" : ""}`}
      ></div>
      <ul>
        <img
          onClick={openMenu}
          className="icon__menu"
          src={iconMenu}
          alt="menu"
        />
        <li className="contendor__logo">
          <img className="img_logo" src={logo} alt="logo" />
        </li>

        <div className={`${menu ? ".menu__active  " : "contenedor_nav"}`}>
          <li>Collections</li>
          <li>Mens</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
          {menu && <MdClose onClick={openMenu} className="icon__close__menu" />}
        </div>
        <li onClick={toggleCart} className="contenedor__cart">
          <span className="count__items">{quantity}</span>
          <img className="img__cart" src={iconCart} alt="cart" />
        </li>
        <li>
          <img className="img__avatar" src={avatar} alt="avatar" />
        </li>
      </ul>

      <hr className="line__header" />

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
              <ProductItem key={+item.id} product={item} quantity={quantity} />
            ))
          ) : (
            <p className="error__cart">Product not found in cart</p>
          )}
        </div>
        <button onClick={() => emptyCart()} className="btn__checkout">
          Clear all
        </button>
      </div>
    </nav>
  );
};
