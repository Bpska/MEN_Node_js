const express = require("express");
const app = express();
const db = require("./db");
 //const person = require('./models/person');
// const MenuItem = require('./models/menu');
const persionRoute = require("./routes/personroutes");
const MenuItemRoute = require("./routes/MenuItem");

const bodyparset = require("body-parser");
app.use(bodyparset.json());

app.get("/", function (req, res) {
  res.send("well come my hotel how can i help you ??");
});
app.get("/bps", (req, res) => {
  res.send("welcome to bps hotel");
});
// app.post('/person', async (req, res) => {
//   try {
//     const newPersonData = req.body;
//     const newPerson = new person(newPersonData);
//     // Save the new person to the database using await
//     const savedPerson = await newPerson.save();
//     console.log('Saved person to database');
//     res.status(201).json(savedPerson);
//   } catch (error) {
//     console.error('Error saving person:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// app.get('/person', async (req, res) => {
//   try {
//     const data = await person.find();
//     console.log("Data fatch");
//     res.status(200).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal server error' });

//   }
// })
// app.post('/MenuItem', async (req, res) => {
//   try {
//     const newMenu = req.body;
//     const newMenuItem = new MenuItem(newMenu);
//     const savedMenu = await newMenuItem.save();
//     console.log("Save data menu in Database");
//     res.status(201).json(savedMenu);
//   } catch (err) {
//     console.error(`Error  Save menu ${err}`);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// })
// app.get('/MenuItem', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log(`Data is show in the page`);
//     res.status(201).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ err: 'Invalid bps erroe' });
//   }
// })
// app.get('/person/:worktype', async (req, res) => {
//   // parameter URL create
//   try {
//     const worktype = req.params.worktype;
//     if (worktype == 'Chif' || worktype == 'manager' || worktype == 'waiter') {
//       const responce = await person.find({ work: worktype });
//       console.log(`Data is show in the page clear`);
//       res.status(201).json(responce);
//     }
//     else {
//       res.status(404).json({ error: "work type is not deffine" });
//     }
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({reeor:"Invelid server error in bps kar"});
//   }
// })

app.use("/person", persionRoute);
app.use("/MenuItem", MenuItemRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
