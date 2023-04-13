import { createConnection } from "mysql";
export const db = createConnection({
  host: "192.168.100.10",
  user: "prueba",
  password: "prueba",
  database: "astra",
});
