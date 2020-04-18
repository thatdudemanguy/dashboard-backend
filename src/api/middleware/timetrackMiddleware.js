const Activity = require('../../../models/activity');

async function getActivityById(req, res, next) {
  let activity;
  try {
    activity = await Activity.findById(req.params.id);
    if (activity == null) {
      return res.status(404).json({ message: `Can not find the activity with id: ${req.params.id}` });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message })
  }

  res.activity = activity;
  next();
}

module.exports = getActivityById;