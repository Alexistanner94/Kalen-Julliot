const mongoose = require("mongoose")
const Schema = mongoose.Schema

// collection and schema for Post Art works
let Post = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    phone_number: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    collection: "Post"
  }
)

module.exports = mongoose.model("Post", Post)
