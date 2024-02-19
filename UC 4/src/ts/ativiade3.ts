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