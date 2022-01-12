import IProductState from "../../interface/productState";
import IProduct from "../../interface/product";
import {
  GET_PRODUCT,
  REMOVE_PRODUCT_CART,
  EMPTY_CART,
  ADD_PRODUCT_CART,
} from "./actions";

type ProductAction =
  | { type: "ADD_PRODUCT_CART"; payload: { product: IProduct; count: number } }
  | { type: "REMOVE_PRODUCT_CART"; payload: String }
  | { type: "GET_PRODUCT"; payload: IProduct }
  | { type: "EMPTY_CART" };

export const productReducer = (
  state: IProductState,
  action: ProductAction
): IProductState => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        quantity: 0,
      };
    case ADD_PRODUCT_CART:
      const { product } = action.payload;

      /**
       * Agrego el producto al carrita si no existe, si existe solo aumento la cantidad
       */
      let existProductCart = state.cart.some((item) => item.id === product.id);
      let arrayCart = existProductCart
        ? [...state.cart]
        : [product, ...state.cart];

      return {
        ...state,
        cart: arrayCart,
        quantity: state.quantity + action.payload.count,
      };

    case REMOVE_PRODUCT_CART:
      const filterItemCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        quantity: state.quantity - 1,
        cart: state.quantity >= 1 ? state.cart : filterItemCart,
      };

    default:
      return state;
  }
};
