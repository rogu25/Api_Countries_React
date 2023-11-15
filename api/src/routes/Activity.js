const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Activity } = require("../db.js");
// const { Op } =  require("sequelize");

router.get("/", async (req, res, next) => {

  try {

    const activities = await Activitys.findAll();
    console.log("que contiene activities: ", activities)
    res.json(activities);

  } catch (error) {
    next(error)
  }

});

module.exports = router;
