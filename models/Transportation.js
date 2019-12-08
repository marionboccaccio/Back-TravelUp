const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transportationSchema = new Schema({
  transport: {
    type: String,
    enum: ["flight", "train", "bus", "car", "foot"]
  },
  startPoint: Number,
  endPoint: Number,
  date: Date,
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }
});

const transportationModel = mongoose.model(
  "Transportation",
  transportationSchema
);

module.exports = transportationModel;