const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Activity } = require("../db.js");
// const { Op } =  require("sequelize");

router.get("/", async (req, res, next) => {

  try {

    const activities = await Activity.findAll();
    res.json(activities);

  } catch (error) {
    next(error)
  }

});

router.post("/", async (req, res, next) => {

  try {
    const { name, dificultad, duracion, temporada, countries } = req.body;

    if (countries.length) {
      const addActivity = await Activity.create({
        name, dificultad, duracion, temporada
      });
      await addActivity.addCountry(countries)
      res.json({ mensaje: "Actividad creada correctamente...!!!" })
    }else{
      res.json({ mensaje: "Error al crear la actividad...!!!" })
    }

  } catch (error) {
    next(error)
  }

});

module.exports = router;
