const findBy = (key, value) => {
  const iteration = (x) => {
    const result = x[key] === value;
    return result === true ? x : null;
  };
  return iteration;
};

export default findBy;
