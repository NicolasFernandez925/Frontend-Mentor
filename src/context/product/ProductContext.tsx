import { createContext } from "react";
import IProduct from "../../interface/product";
import IProductState from "../../interface/productState";

interface IProductContext {
  stateProduct: IProductState;
  addProductCart: (product: IProduct, count: number) => void;
  getProduct: () => void;
  removeProductCart: (id: String) => void;
  emptyCart: () => void;
}

export const ProductContext = createContext({} as IProductContext);
