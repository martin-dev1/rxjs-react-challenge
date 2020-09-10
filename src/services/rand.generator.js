export const getRandomValue = (max, min) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};
