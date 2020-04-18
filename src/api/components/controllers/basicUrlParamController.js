const fetch = require('node-fetch');

module.exports = {
  read: (req, res) => {
    try {
      fetch(`${req.targetUrl}&q=${req.params.q}`)
        .then(checkStatus)
        .then(res => res.json())
        .then(json => {
          return res.status(200).json(json);
        });
    } catch (e) {
      return res.status(500);
    }
  },
}

function checkStatus(res) {
  if (!res.ok) {
    throw new Error(`Failed to receive data`);
  } else {
    return res;
  }
}