const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db.js");
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
    const { idPais, name, dificultad, duracion, temporada, countries, activities } = req.body;

    if (idPais && activities.length) {

      const actualizarPais = await Country.findByPk(idPais);

      const buscaRepetido = await Country.findByPk(idPais);

      const repetido = await buscaRepetido.hasActivity(activities);
      
      if(repetido) return res.json({ mensaje: "Yá existe actividad!!!" });

      await actualizarPais.addActivity(activities);

      return res.json({ mensaje: "Actividad Agregada correctamente...!!!" })
    }

    if (countries.length && name && dificultad && duracion && temporada) {
      const addActivity = await Activity.create({
        name, dificultad, duracion, temporada
      });
      await addActivity.addCountry(countries)
      return res.json({ mensaje: "Actividad creada correctamente...!!!" })
    }
    return res.json({ mensaje: "Error revise...!!!" })

  } catch (error) {
    return next(error)
  }

});

module.exports = router;
