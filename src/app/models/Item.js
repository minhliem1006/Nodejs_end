const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Item = new Schema({
    name: { type: String, maxLength: 255, },
    description: { type: String, maxLength : 600,},
    image: { type: String,},
    videoId :{ type: String,},
    slug : {type:String,slug: "name",unique:true,}
  },
  {
    timestamps: true
  });
module.exports = mongoose.model('Item',Item);