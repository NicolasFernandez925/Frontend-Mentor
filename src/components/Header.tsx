import iconMenu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import iconCart from "../assets/icon-cart.svg";
import { MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import useProduct from "../hooks/useProduct";
import { Cart } from "./Cart";

export const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { stateProduct } = useProduct();
  const { quantity } = stateProduct;

  const ref = useRef<HTMLElement | null>(null);

  const closeModalCart = (e: any) => {
    e.preventDefault();
    const target = e.target;
    if (ref.current && !ref.current.contains(target)) {
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
    <nav ref={ref} className="navbar">
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
      <Cart toggle={toggle} />
    </nav>
  );
};
