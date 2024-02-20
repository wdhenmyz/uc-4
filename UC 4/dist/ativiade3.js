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
//despesas e receitas
class receitas {
    cliente;
    despesas;
    receitaCliente;
    constructor(cliente, despesas, receitaCliente) {
        this.cliente = cliente;
        this.despesas = despesas;
        this.receitaCliente = receitaCliente;
    }
}
//metas financeiras
class planejamento {
    metas;
    saldo;
    progresso;
    constructor(metas, saldo, progresso) {
        this.metas = metas;
        this.saldo = saldo;
        this.progresso = progresso;
    }
}
