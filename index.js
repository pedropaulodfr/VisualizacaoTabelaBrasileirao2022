const express = require("express")
const app = express()
const axios = require("axios")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const PORTA = 4040

// Confirgurando Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurando Handlebars
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))


app.get("/", (req, res) => {
    axios.get("http://127.0.0.1:5000/tabela")
    .then((response) => {
        const dados = response.data
        
        res.render("index", {dados})
    })
    .catch((error) => {
        console.log(error);
        res.send(error)
    })
})

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
})