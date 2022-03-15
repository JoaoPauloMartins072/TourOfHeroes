const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;
const HeroesSchema = new Schema({
  id: Number,
  name: String,
})

const Hero = mongoose.model("Hero", HeroesSchema)
module.exports = Hero
