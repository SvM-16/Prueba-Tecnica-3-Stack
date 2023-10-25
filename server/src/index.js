import app from "./app.js"
import { conectarDB } from "./db.js"

conectarDB();

app.listen(5000, () => console.log(`iniciando server`));