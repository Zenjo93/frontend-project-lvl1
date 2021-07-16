export default (min, max) => {
  let floorMax = Math.floor(max);
  let ceilMin = Math.ceil(min);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};
