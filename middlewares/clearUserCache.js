const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // wait for route handler
  await next();

  clearHash(req.user.id);
};
