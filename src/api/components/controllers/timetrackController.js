const Activity = require('../../../../models/activity');
module.exports = {
  readTimetracks: async (req, res) => {
    try {
      const activity = await Activity.find();
      res.send(activity);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}