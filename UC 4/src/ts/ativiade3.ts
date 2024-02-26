//criação de conta
abstract class conta{
    protected id: string;
    protected titularidade: string;
    protected tipoConta: string;
    protected saldo: number;
    protected extrato: Array<string>;
    constructor(id: string, titularidade: string, tipoConta: string, saldo: number, extrato: Array<string>,){
        this.id = id
        this.titularidade = titularidade
        this.tipoConta = tipoConta
        this.saldo = saldo
        this.extrato = extrato
    }
    mostrarDados(){
    }
}

//despesas e receitas
class receitas{
    protected cliente: conta;
    protected despesas: Array<number>;
    protected receitaCliente: [string, number];
    constructor(cliente: conta, despesas: Array<number>, receitaCliente: [string, number]){
        this.cliente = cliente
        this.despesas = despesas
        this.receitaCliente = receitaCliente
    }
    mostrarDados(){
        console.log('-------------dados da receitas---------------')
        console.log(`cliente--------: ${this.cliente}`)
        console.log(`despesas-------: ${this.despesas}`)
        console.log(`receitas-------: ${this.receitaCliente}`)
    }
}

//metas financeiras
class planejamento{
    protected usuario: conta;
    protected receita: receitas;
    protected metas: Array<string>;
    protected saldo: number;
    protected progresso: Array<string>;
    constructor(usuario: conta , receita: receitas, metas: Array<string>, saldo: number, progresso: Array<string>){
        this.usuario = usuario
        this.receita = receita
        this.metas = metas
        this.saldo = saldo
        this.progresso = progresso 
    }
    mostrarDados(){
        console.log('-------------dados de planejamento---------------')
        console.log(`usuario------: ${this.usuario}`)
        console.log(`receita------: ${this.receita}`)
        console.log(`metas--------: ${this.metas}`)
        console.log(`saldo--------: ${this.saldo}`)
        console.log(`progresso----: ${this.progresso}`)
    }
}

//const usuario1 = new usuario('5599','trabalhador','alto nivel',5445,['977','88'])
//const receita1 = new receitas()
//const planejamento1 = new planejamento()

