const express = require("express")
const cors = require("cors")
require('dotenv').config();

const dbConnect = require("./config/mongo");

const app = express()

//Le decimos a la app de express() que use cors para evitar el error Cross-Domain
app.use(cors())
app.use(express.json())
app.use("/api", require("./routes/index.js")) //Lee routes/index.js por defecto
//app.use("/api/users", require("./routes/users.js")) //Lee routes/users.js
//app.use("/api/tracks", require("./routes/tracks.js")) //Lee routes/tracks.js

app.use(express.static("storage")) // http://localhost:3000/imagen.png

dbConnect()



const port = process.env.PORT || 3000
app.listen(port, () => {
console.log("Servidor escuchando en el puerto " + port)
})