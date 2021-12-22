const getSteps = (min: number, max: number, step: number) => {
  let array = [];
  for (let i = 0; i < max / step; i++) {
    array.push(step * i)
  }
  array.push(max);
  array.splice(0, 1);
  array[0] = min;
  return array;
}

export default getSteps;
