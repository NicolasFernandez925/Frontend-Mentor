export const descount = (price: number, percentage: number) => {
  return price - (price * percentage) / 100;
};
