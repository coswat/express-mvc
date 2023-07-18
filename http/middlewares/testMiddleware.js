// test middleware

const test = (req, res, next) => {
  next();
};

module.exports = test;
