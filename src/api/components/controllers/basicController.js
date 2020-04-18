const fetch = require('node-fetch');

module.exports = {
  read: (req, res) => {
    try {
      fetch(req.targetUrl)
        .then(res => res.json())
        .then(json => {
          return res.status(200).json(json);
        });
    } catch (e) {
      return res.status(500);
    }
  },
}