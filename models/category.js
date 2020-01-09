const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim:true
    },
    description: {
      type: String,
      default: '',
      trim:true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('categories', categorySchema);
