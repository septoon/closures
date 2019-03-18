const findBy = (key, value) => {
  const keyWords = (x) => {
    const result = x[key] === value;
    return result ? x : null;
  };
  return keyWords;
};

export default findBy;
