"use strict";
class carro {
    modelo;
    ano;
    marca;
    preco;
    motor;
    cor;
    constructor(modelo, ano, marca, preco, motor, cor) {
        this.ano = ano;
        this.modelo = modelo;
        this.marca = marca;
        this.preco = preco;
        this.cor = cor;
        this.motor = motor;
    }
}
const carrodev = new carro('opala', 2000, 'chevrolet', 45000, 4.1, 'vermelho');
