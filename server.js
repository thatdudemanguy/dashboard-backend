const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/timetracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', e => console.log(e));
db.on('open', () => console.log('Connected to the database'));

app.use(express.json()); //middleware that lets server accept json inside a request.

const timetrackerRoutes = require('./routes/timetracker')

app.use('/timetracker', timetrackerRoutes);
app.listen(3000, () => console.log('Server started'))