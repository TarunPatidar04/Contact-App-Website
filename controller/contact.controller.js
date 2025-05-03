import Contact from "../models/contacts.models.js";
import mongoose from "mongoose";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("home", { contacts });
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};

export const showContact = async (req, res) => {
  const params = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!params) {
    res.render("404", { message: "Id not valid" });
  }
  try {
    // const contact = await Contact.findOne({ _id: req.params.id });
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
    }
    res.render("show-contact", { contact });
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};

// export const showContact = async (req, res) => {
// const params = mongoose.Types.ObjectId.isValid(req.params.id);
// if (!params) {
//   res.render("404");
// }

//   // const contact = await Contact.findOne({ _id: req.params.id });
//   const contact = await Contact.findById(req.params.id);
//   // res.json(contact);
//   res.render("show-contact", { contact });
// };

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

  try {
    await Contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};

export const getUpdateContact = async (req, res) => {
  const params = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!params) {
    res.render("404", { message: "Invalid Id" });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
    }
    res.render("update-contact", { contact });
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};

export const PostUpdateContact = async (req, res) => {
  const params = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!params) {
    res.render("404", { message: "Id not valid" });
  }

  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
    }
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
    }
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("500", { message: error });
  }
};
