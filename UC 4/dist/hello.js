"use strict";
// let, var e const
//recebendo o formulario
const formulario = document.getElementById('cadastro');
// adicionando um evento ao formulario de cadastro, tipo dubmit
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    //variável nome
    const nome = document.getElementById('nome').value;
    //variavel cpf
    const cpf = document.getElementById('cpf').value;
    //vairavel email 
    const email = document.getElementById('email').value;
    //console.log(`seu nome é ${nome} e o seu cpf é ${cpf}`)
    const dados = `
        <h1>Dados coletados</h1>
        <p>nome: ${nome} <br>
        <p>Cpf: ${cpf} <br>
        <p>Email: ${email} <br>
        `;
    const dadosform = document.getElementById(`resposta`);
    if (dadosform) {
        dadosform.innerHTML = dados;
    }
});
