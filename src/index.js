const express = require("express");
const app = express();



app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id: "03", nombres: "david", apellido1: "gomez", apellido2: "lopez", edad: "30", sexo: "masculino", telefono: "312456382",
    eps:"comfacor", email:"davideoeo210494@gmail.com" },
      ];
  res.send(usuarios);
});
app.get("/reservas", (req, res) => {
  let reservas = [
    { id: "03", fecha_reserva: "05/05/19", hora_inicial: "08:34", hora_final: "10:00", id_bici:"798", id_usuario: "055"  },
      ];
  res.send(reservas);
});

app.get("/ubicaciones", (req, res) => {
  let ubicaciones = [
    { id: "03", direccion: "calle123", hora_actual: "8:47", fecha_actual: "10/05/19", id_usuario: "90"},
      ];
  res.send(ubicaciones);
});

app.get("/bicicletas", (req, res) => {
  let bicicletas = [
    { id: "6", cod_bici: "123", marca: "trek", color: "rojo", nromarco: "565690"},
      ];
  res.send(bicicletas);
});
app.get("/rutas", (req, res) => {
  let rutas = [
    { id: "6", punto_partida: "7824589", punto_llegada: "5474645", },
      ];
  res.send(rutas);
});

app.get("/ubici", (req, res) => {
  let ubici_ruta = [
    { id: "6", id_ruta: "23455", id_bici: "55", },
      ];
  res.send(ubici_ruta);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
