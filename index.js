const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contacts.models");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
});

app.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  // const contact = await Contact.findById( req.params.id );
  // res.json(contact);
  res.render("show-contact", { contact });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", async (req, res) => {
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
});

app.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  res.render("update-contact", { contact });
});

app.post("/update-contact/:id", async (req, res) => {
  // const {firstName,lastName,email,phone,address}= req.body;
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.get("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
