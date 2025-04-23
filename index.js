const express = require("express");

const app = express();

// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/show-contact", (req, res) => {
  res.render("show-contact");
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", (req, res) => {});

app.get("/update-contact", (req, res) => {});

app.post("/update-contact", (req, res) => {
  res.render("update-contact");
});

app.get("/delete-contact", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
