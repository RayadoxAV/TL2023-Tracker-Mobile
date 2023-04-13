import express from "express";
import { db } from "../config/db.js";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  db.query(
    "SELECT * FROM registroser AS rs JOIN servicio AS s ON (s.idServicio = rs.Servicio_idServicio) WHERE rs.estado LIKE '%r%';",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/user", (req, res) => {
  db.query();
});

app.listen(PORT, () => {
  console.log("Server running");
});
