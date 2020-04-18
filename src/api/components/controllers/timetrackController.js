const Activity = require('../../../../models/activity');

module.exports = {
  readTimetracks: async (req, res) => {
    try {
      const activity = await Activity.find();
      res.send(activity);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
  readTimetrackById: async (req, res) => {
    try {
      res.status(200).json(res.activity);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  pushTimetrack: async (req, res) => {
    const activity = new Activity({
      title: req.body.title,
      description: req.body.description || null,
      state: req.body.state,
      duration: req.body.duration,
      date: req.body.date,
      tag: req.body.tag || null,
    });

    try {
      const newActivity = await activity.save();
      res.status(201).json(newActivity);
    } catch (e) {
      res.status(400).json({ message: e.message });
      // .send is html
      // .json is json
    }
  },
  deleteTimetrackById: async (req, res) => {
    try {
      await res.activity.remove();
      res.json({ message: `Activity with id ${req.params.id} successfully deleted.` })
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
  patchTimetrackById: async (req, res) => {
    try {
      if (req.body._id) {
        delete req.body._id;
      }

      Object.entries(req.body).forEach((item) => {
        res.activity[item[0]] = item[1];
      });

      res.activity.save();
      res.status(200).json(res.activity);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
  putTimetrackById: async (req, res) => {
    try {
      res.activity.title = req.body.title;
      res.activity.description = req.body.description || null;
      res.activity.state = req.body.state;
      res.activity.duration = req.body.duration;
      res.activity.date = req.body.date;
      res.activity.tag = req.body.tag || null;

      res.activity.save();
      res.status(200).json(res.activity);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
}