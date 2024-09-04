const express = require("express");
const router = express.Router();
const person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const newPersonData = req.body;
    const newPerson = new person(newPersonData);
    // Save the new person to the database using await
    const savedPerson = await newPerson.save();
    console.log("Saved person to database");
    res.status(201).json(savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:worktype", async (req, res) => {
  // parameter URL create
  try {
    const worktype = req.params.worktype;
    if (worktype == "Chif" || worktype == "manager" || worktype == "waiter") {
      const responce = await person.find({ work: worktype });
      console.log(`Data is show in the page clear`);
      res.status(201).json(responce);
    } else {
      res.status(404).json({ error: "work type is not deffine" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ reeor: "Invelid server error in bps kar" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const updatedPerson = await person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      { new: true, runValidators: true }
    );

    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Updated person in database");
    res.status(200).json(updatedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ reeor: "Invelid server error in bps kar" });
  }
});
router.delete("/:id", async (req, res) => {
    try {
      const personId = req.params.id;
      const deletedPerson = await person.findByIdAndDelete(personId);
  
      if (!deletedPerson) {
        return res.status(404).json({ error: "Person not found" });
      }
  
      console.log("Data is Deleted In The Data Bases");
      res.status(200).json({ message: "Person Deleted Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Invalid Object Id Number" });
    }
});
module.exports = router;
