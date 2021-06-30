const express = require("express");

const bodyParser = require("body-parser");

const rqPublicacacion = require("./api/controllers/publicacionControllers.js");

const rqMensaje = require("./api/controllers/respuestaControllers.js");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.get("/", (req, res) => {
  res.json({ info: `Rama principal del servidor` });
});

app.get("/publicacion", rqPublicacacion.getPublicaciones);
app.post("/publicacion", rqPublicacacion.postPublicaciones);
app.get("/mensaje", rqMensaje.getMensaje);
app.post("/mensaje", rqMensaje.createMensaje);
app.get("/mensaje/:id", rqMensaje.getMensajeByIdentificador);

app.listen(port, () => {
  console.log(`servidor mondado en el puerto ${port}`);
});
