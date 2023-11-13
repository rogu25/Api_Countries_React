const axios = require("axios");
const { Router } = require("express");
const router = Router();

const { Country } = require("../db.js");
// const { getCountries } = require("../controllers/Controllers.js");
// const { getTypes} = require("../controllers/types.js");
// const { validatorUUIDV4 } = require("../controllers/validator.js");
// const { Op } =  require("sequelize");

router.get("/", async (req, res, next) => {

  try {
    const contries = await axios.get("https://restcountries.com/v3/all");

    const saveCountries = contries.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.common,
        imagen: c.flags[1],
        continente: c.continents,
        capital: c.capital?c.capital:"desconocido",
        subregion: c.subregion?c.subregion:"desconocido",
        area: c.area,
        poblacion: c.population
      }
    });

    const countries = await Country.findAll();

    if (!countries.length) {
      await Country.bulkCreate(saveCountries);
      console.log("entre al creador")
    }
    res.json(countries);

  } catch (error) {
    next(error);
  }

});

router.get("/:idPais", async (req, res, next) => {

  try {
    const {idPais} = req.params; 
    const contries = await axios.get(`https://restcountries.com/v3/alpha/${idPais}`);
    console.log("que contiene name: ", idPais)
    // const saveCountries = contries.data.map((c) => {
    //   return {
    //     id: c.cca3,
    //     name: c.name.common,
    //     imagen: c.flags[1],
    //     continente: c.continents,
    //     capital: c.capital?c.capital:"desconocido",
    //     subregion: c.subregion?c.subregion:"desconocido",
    //     area: c.area,
    //     poblacion: c.population
    //   }
    // });

    // const countries = await Country.findAll();

    // if (!countries.length) {
    //   await Country.bulkCreate(saveCountries);
    //   console.log("entre al creador")
    // }
    res.json(contries.data);

  } catch (error) {
    next(error);
  }

});

module.exports = router;  