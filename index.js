import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes.js";
import connectDB from "./config/database.js";
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();



// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// router
app.use("/", contactRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port {process.env.PORT}`);
});
