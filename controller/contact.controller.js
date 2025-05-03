import Contact from "../models/contacts.models.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
};

export const showContact = async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  // const contact = await Contact.findById( req.params.id );
  // res.json(contact);
  res.render("show-contact", { contact });
};
export const addContact = (req, res) => {
  res.render("add-contact");
};
export const PostAddContact = async (req, res) => {
  // const contact = await Contact.insertOne({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   address: req.body.address,
  // });
  await Contact.create(req.body);

  // res.send(req.body);
  res.redirect("/");
};

export const getUpdateContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  res.render("update-contact", { contact });
};

export const PostUpdateContact = async (req, res) => {
  // const {firstName,lastName,email,phone,address}= req.body;
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
