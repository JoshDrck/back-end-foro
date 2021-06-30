const { response } = require("express");
const { portalSuspended } = require("pg-protocol/dist/messages");
const pool = require("../config/config.js");

const getPublicaciones = (req, res) => {
  pool.query("SELECT * FROM publicacion", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

const postPublicaciones = (req, res) => {
  const { autor, titulo, fecha, mensaje } = req.body;
  pool.query(
    "INSERT INTO publicacion (autor, titulo, fecha, mensaje) VALUES ($1, $2, $3, $4)",
    [autor, titulo, fecha, mensaje],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).send("Usuario añadido correctamente");
    }
  );
};

module.exports = {
  getPublicaciones,
  postPublicaciones,
};
