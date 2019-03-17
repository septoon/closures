const findBy = (key, value) => {
  const keyWords = (x) => {
    const result = x[key] === value;
    return result === true ? x : null;
  };
  return keyWords;
};

export default findBy;
