const mongoose = require(mongoose);
require("dotenv").config();
const mongoDBErrors = require("mongoose-mongodb-errors");

mongoose.promise = global.promise;
mongoose.plugin(mongoDBErrors);
mongoose.connect(process.env.MONGOURI)