module.exports = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    process.env.NODE_ENV = 'test';
  }
};
