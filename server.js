const express = require("express");
const fs = require("fs");
const pdf = require("html-pdf");
var options = { width: "100mm", height: "50.5mm"  };

const app = express();

app.get("/", (req,res)=>{
    pdf.create("<h1>Teste</h1><br><h2>Teste2</h2><br><h3>Teste3</h3>", options).toFile("./files/teste.pdf",(err, result)=>{
        if(err){ 
            res.send("<h1>Não foi possivel gerar o arquivo:</h1><br><br><b>Erro:"+err+"</b>");
            return console.log(err);
        }
        console.log(result);
        res.sendFile(result.filename);
    });
});

app.listen(3001);