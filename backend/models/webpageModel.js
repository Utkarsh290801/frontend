const { Schema, model, Types } = require("../connection");

const myschema = new Schema({
  title: {type: String,default:"My Webpage"},
  description: {type: String,default:"Edit Description"},
  type: {type: String,default:"unspecified"},
  data: { type: Object, default: null },
  forms: Array,
  disposed: { type: Boolean, default: false },
  user: { type: Types.ObjectId, ref: "usercollection" },
  expiryDate: { type: Date, default: new Date()}
});
module.exports = model("webpagecollection", myschema);
