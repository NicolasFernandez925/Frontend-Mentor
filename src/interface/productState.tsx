import IProduct from "./product";

interface IProductState {
  cart: Array<IProduct>;
  product: IProduct;
  quantity: number;
}

export default IProductState;
