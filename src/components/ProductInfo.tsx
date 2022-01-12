import useProduct from "../hooks/useProduct";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { descount } from "./../helper/descount";
import useQuantity from "../hooks/useQuantity";

export const ProductInfo = () => {
  const {
    stateProduct: { product },
    addProductCart,
  } = useProduct();

  const { quantity, decreseQuantity, increaseQuantity } = useQuantity();

  const clickAddProductCart = () => {
    toast.success(`Add to cart (${quantity}) item's`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    addProductCart(product, quantity);
  };

  return (
    <>
      <p className="category__product">{product.brand}</p>
      <h1>{product.name}</h1>
      <p className="text__info__product">{product.description}</p>
      <div className="discount__info__product">
        <p className="price__product">
          ${product.price}
          <span className="discount">{product.discount}%</span>
        </p>
        <p className="price_descount">
          ${descount(product.price, product.discount)}
        </p>
      </div>

      <div className="container__addProductCart">
        <div className="count__product">
          <button onClick={increaseQuantity} className="btn__sum">
            +
          </button>
          <span className="product__count__total">{quantity}</span>
          <button onClick={decreseQuantity} className="btn__rest">
            -
          </button>
        </div>

        <div className="container__btn__addToCart">
          <button
            type="button"
            disabled={quantity === 0}
            onClick={clickAddProductCart}
            className="btn__addToCart"
            style={{ cursor: quantity === 0 ? "not-allowed" : "pointer" }}
          >
            <MdOutlineShoppingCart className="icon__cart " /> Add to cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
