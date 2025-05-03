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

app.post("/add-contact", (req, res) => {});

app.get("/update-contact/:id", (req, res) => {
  res.render("update-contact");
});

app.post("/update-contact/:id", (req, res) => {
  res.render("update-contact");
});

app.get("/delete-contact/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
