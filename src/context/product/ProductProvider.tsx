import { useCallback, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import restService from "../../services/productServices.js";
import { productReducer } from "./productReducer";
import IProductState from "../../interface/productState";
import IProduct from "../../interface/product";
import {
  GET_PRODUCT,
  REMOVE_PRODUCT_CART,
  EMPTY_CART,
  ADD_PRODUCT_CART,
} from "./actions";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: IProductState = {
  product: {
    brand: "",
    description: "",
    discount: 0,
    id: "",
    images: [],
    name: "",
    price: 0,
  },
  cart: [],
  quantity: 0,
};

export const ProductProvider = ({ children }: Props) => {
  const [stateProduct, dispatch] = useReducer(productReducer, INITIAL_STATE);

  const addProductCart = (product: IProduct, count: number): void => {
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: { product, count },
    });
  };

  const getProduct = async (): Promise<any> => {
    const data = await restService.GET.findProduct(
      "https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f"
    );

    dispatch({ type: GET_PRODUCT, payload: data });
  };

  const removeProductCart = useCallback((id: String) => {
    dispatch({
      type: REMOVE_PRODUCT_CART,
      payload: id,
    });
  }, []);

  const emptyCart = useCallback(() => {
    dispatch({
      type: EMPTY_CART,
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        stateProduct,
        addProductCart,
        getProduct,
        removeProductCart,
        emptyCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
