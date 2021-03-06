const globals = require('./src/globals');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./src/routes/users');
const listingsRouter = require('./src/routes/listings');

app.use('/users', usersRouter);
app.use('/listings', listingsRouter);

app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

const port = process.env.PORT || globals.serverPort;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
