const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models');
const User = require('./models/user');
const Event = require('./models/event');
const Booking = require('./models/booking');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});