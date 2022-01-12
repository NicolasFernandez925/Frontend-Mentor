import { useEffect, useContext } from "react";
import { ProductContext } from "../context/product/ProductContext";

const useProduct = () => {
  const {
    stateProduct,
    addProductCart,
    getProduct,
    removeProductCart,
    emptyCart,
  } = useContext(ProductContext);

  useEffect(() => {
    getProduct();
  }, []);

  return { stateProduct, addProductCart, removeProductCart, emptyCart };
};

export default useProduct;
