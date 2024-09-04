const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/menu');

router.post('/', async (req, res) => {
    try {
      const newMenu = req.body;
      const newMenuItem = new MenuItem(newMenu);
      const savedMenu = await newMenuItem.save();
      console.log("Save data menu in Database");
      res.status(201).json(savedMenu);
    } catch (err) {
      console.error(`Error  Save menu ${err}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log(`Data is show in the page`);
      res.status(201).json(data);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ err: 'Invalid bps erroe' });
    }
  })

  module.exports = router;