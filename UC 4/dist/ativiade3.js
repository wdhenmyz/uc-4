"use strict";
//criação de conta
class conta {
    id;
    titularidade;
    tipoConta;
    saldo;
    extrato;
    constructor(id, titularidade, tipoConta, saldo, extrato) {
        this.id = id;
        this.titularidade = titularidade;
        this.tipoConta = tipoConta;
        this.saldo = saldo;
        this.extrato = extrato;
    }
}
