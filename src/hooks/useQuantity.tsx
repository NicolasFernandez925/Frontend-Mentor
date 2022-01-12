import { useState } from "react";

const useQuantity = (initialState = 0) => {
  const [quantity, setQuantity] = useState<number>(initialState);

  const increaseQuantity = (): void => {
    setQuantity((prevCant) => prevCant + 1);
  };

  const decreseQuantity = (): void => {
    quantity === 0 ? setQuantity(0) : setQuantity((prevCant) => prevCant - 1);
  };

  return { quantity, decreseQuantity, increaseQuantity };
};

export default useQuantity;
