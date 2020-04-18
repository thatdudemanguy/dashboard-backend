const express = require('express');
const mongoose = require('mongoose');
const Server = require('./src/server');
require('dotenv').config();

const app = new Server().app;

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', e => console.log(e));
db.on('open', () => console.log('Connected to the database'));

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))