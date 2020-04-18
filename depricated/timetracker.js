const express = require('express');
const router = express.Router();
const Activity = require('../models/activity');

// TODO: REFACTOR TO NEW PRETTY CODE

// Getting all time logged today
// router.get('/', async (req, res) => {
//   try {
//     const activity = await Activity.find();
//     res.send(activity);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

// Getting specific log
// router.get('/:id', getActivityById, (req, res) => {
//   try { 
//     res.status(200).json(res.activity);   
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//   }
// });

// Creating a new log
// router.post('/', async (req, res) => {
//   const activity = new Activity({
//     title: req.body.title,
//     description: req.body.description || null,
//     state: req.body.state,
//     duration: req.body.duration,
//     date: req.body.date,
//     tag: req.body.tag || null,
//   });

//   try {
//     const newActivity = await activity.save();
//     res.status(201).json(newActivity);
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//     // .send is html
//     // .json is json
//   }
// });

// patching a log
// router.patch('/:id', getActivityById, async (req, res) => {
//   try {
//     if(req.body._id) {
//       delete req.body._id;
//     }

//     Object.entries(req.body).forEach((item) => {
//       res.activity[item[0]] = item[1];
//     });

//     res.activity.save();
//     res.status(200).json(res.activity);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

// Putting a log
// router.put('/:id', getActivityById, (req, res) => {
//   try {

//   } catch (e) {

//   }
// });

// Deleting a log
// router.delete('/:id', getActivityById, async (req, res) => {
//   try {
//     await res.activity.remove();
//     res.json({ message: `Activity with id ${req.params.id} successfully deleted.` })
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });



module.exports = router;