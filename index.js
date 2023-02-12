const express = require("express")
const app = express()
const axios = require("axios")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const PORTA = process.env.PORT || 4040

// Confirgurando Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurando Handlebars
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))


app.get("/", (req, res) => {
    axios.get("https://apitabelabrasileirao2022.onrender.com/tabela")
    .then((response) => {
        const dados = response.data
        
        res.render("classificacao", {dados})
    })
    .catch((error) => {
        console.log(error);
        res.send(error)
    })
})

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
})