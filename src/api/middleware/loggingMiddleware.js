const dateFormat = require('dateformat');

module.exports = (req, res, next) => {
  const { url, rawHeaders, method } = req;
  const reqMoment = dateFormat(new Date());

  console.log(`${method} -- ${url} -- ${reqMoment}`);
  next();
}