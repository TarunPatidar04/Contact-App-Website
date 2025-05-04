import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});
contactSchema.plugin(mongoosePaginate);
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
