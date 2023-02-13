const express = require("express")
const app = express()
const axios = require("axios")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const { response } = require("express")
const PORTA = process.env.PORT || 4040

// Confirgurando Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurando Handlebars
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))


app.get("/", (req, res) => {
    //axios.get("http://127.0.0.1:5000/tabela")
    axios.get("https://apitabelabrasileirao2022.onrender.com/tabela")
    .then((response) => {
        let dados = response.data
        
        res.render("classificacao", {dados})
    })
    .catch((error) => {
        console.log(error);
        res.send(error)
    })
})

app.get("/tabela", (req, res) => {
    res.redirect(301, "/")
})

app.get("/artilheiros", (req, res) => {
    //axios.get("http://127.0.0.1:5000/artilheiros")
    axios.get("https://apitabelabrasileirao2022.onrender.com/artilheiros")
    .then((response) => {
        let dados = response.data

        console.log(dados[0]);

        res.render("artilheiros", {dados})
    })
    .catch((error) => {
        res.send(error)
    })

})

app.get("/rodadas", (req, res) => {
    //axios.get("http://127.0.0.1:5000/rodadas")
    axios.get("https://apitabelabrasileirao2022.onrender.com/rodadas")
    .then((response) => {
        let dados = response.data

        console.log(dados[0].Jogos);
    })
    .catch((error) => {
        res.send(error)
    })
})

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
})