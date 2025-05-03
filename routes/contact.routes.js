import express from "express";
import {
  addContact,
  deleteContact,
  getContacts,
  getUpdateContact,
  PostAddContact,
  PostUpdateContact,
  showContact,
} from "../controller/contact.controller.js";
const router = express.Router();

// Routes
router.get("/", getContacts);

router.get("/show-contact/:id", showContact);

router.get("/add-contact", addContact);

router.post("/add-contact", PostAddContact);

router.get("/update-contact/:id", getUpdateContact);

router.post("/update-contact/:id", PostUpdateContact);

router.get("/delete-contact/:id", deleteContact);

export default router;
