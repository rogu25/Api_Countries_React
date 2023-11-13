const axios = require("axios");
const { Router } = require("express");
const router = Router();
// const {  } = require("../db.js");
// const {getPokemons} = require("../controllers/pokemons.js");
// const { getTypes} = require("../controllers/types.js");
// const { validatorUUIDV4 } = require("../controllers/validator.js");
// const { Op } =  require("sequelize");

router.get("/", async (req, res, next) => {
  
    try {
        console.log("estoy en la ruta activity");
    } catch (error) {
      next(error);
    }
    
  });

  module.exports = router;  
  