//criação de conta
class conta{
    id: string;
    titularidade: string;
    tipoConta: string;
    saldo: number;
    extrato: Array<string>;
    constructor(id: string, titularidade: string, tipoConta: string, saldo: number, extrato: Array<string>,){
        this.id = id
        this.titularidade = titularidade
        this.tipoConta = tipoConta
        this.saldo = saldo
        this.extrato = extrato
    }
}

//despesas e receitas
class receitas{
    cliente: Array<string>;
    despesas: Array<number>;
    receitaCliente: [string, number];
    constructor(cliente: Array<string>, despesas: Array<number>, receitaCliente: [string, number]){
        this.cliente = cliente
        this.despesas = despesas
        this.receitaCliente = receitaCliente
    }
}
//metas financeiras
class planejamento{
    metas: Array<string>;
    saldo: Array<number>;
    progresso: Array<string>;
    constructor(metas: Array<string>, saldo: Array<number>, progresso: Array<string>){
        this.metas = metas
        this.saldo = saldo
        this.progresso = progresso 
    }

}