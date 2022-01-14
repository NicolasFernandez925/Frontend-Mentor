import { useState } from "react";

const useSlider = <T,>(arrayElements: Array<T>, initialState = 0) => {
  const [index, setIndex] = useState<number>(initialState);

  const length = arrayElements.length;

  const prevImage = () => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex((index: number) => index - 1);
    }
  };

  const nextImage = () => {
    if (index < length - 1) {
      setIndex((index: number) => index + 1);
    } else {
      setIndex(0);
    }
  };

  return { index, prevImage, nextImage };
};

export default useSlider;
