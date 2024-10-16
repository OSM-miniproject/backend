const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  gender: { type: String },
  age: { type: String},
  personality: { type: String },
  handedness: { type: String },
  illnessFear: { type: Number, default: 0 },
  deathFear: { type: Number, default: 0 },
  nightStartled: { type: Number, default: 0 },
  sleepHours: { type: Number, default: 0 },
  hoarding: { type: Number, default: 0 },
  repetitiveActions: { type: Number, default: 0 },
  sequenceRestless: { type: Number, default: 0 },
  avoidTouch: { type: Number, default: 0 },
  thoughtControl: { type: Number, default: 0 },
  checkThings: { type: Number, default: 0 },
  itemsArranged: { type: Number, default: 0 },
  handWashing: { type: Number, default: 0 },
  engrossedThoughts: { type: Number, default: 0 },
  checkingGas: { type: Number, default: 0 },
  repulsiveThoughts: { type: Number, default: 0 },
}, { timestamps: true });

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
