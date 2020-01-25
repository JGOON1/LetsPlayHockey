const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');

const app = express();
const API_PORT = process.env.PORT || 3001;

require('./config/passport');

// Middleware
app.use(Cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());
app.use(express.static("public"));
app.use('/static', express.static('public'));

// Routes
require("./routes/createTeam")(app);
require("./routes/loginUser")(app);
require("./routes/findGames")(app);
require("./routes/findUser")(app);
require("./routes/updateUser")(app);
require("./routes/registerUser")(app);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;