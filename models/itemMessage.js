import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  title: String,

});
let ItemMessage = mongoose.model('todos', itemSchema);

export default ItemMessage;
