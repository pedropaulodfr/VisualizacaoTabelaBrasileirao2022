let seletorTabela = document.getElementById("tabela");
seletorTabela.checked = true;
let seletorArtilheiros = document.getElementById("artilheiros");
let seletorRodadas = document.getElementById("rodadas");

let formularios = document.getElementById("formularios");

let formTabela = document.createElement("form");
formTabela.method = "GET";
formTabela.action = "/tabela";

let formArtilheiros = document.createElement("form");
formArtilheiros.method = "GET";
formArtilheiros.action = "/artilheiros";

let formRodadas = document.createElement("form");
formRodadas.method = "GET";
formRodadas.action = "/rodadas";

formularios.appendChild(formTabela);
formularios.appendChild(formArtilheiros);
formularios.appendChild(formRodadas);

function getSelectedRoute(){
    let radios = document.getElementsByName("seletores-rota");
    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var rota = radios[i].id;
        }
    }

    switch(rota){
        case "tabela":
            formTabela.submit();
            seletorTabela.checked = true;
            break;
        case "artilheiros":
            formArtilheiros.submit();
            seletorArtilheiros.checked = true;
            break;
        case "rodadas":
            formRodadas.submit();
            seletorRodadas.checked = true;
            break;
        default:
            break;
    }

}