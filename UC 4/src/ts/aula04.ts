
class pessoa{
    nome: string;
    idade: number;
    genero?: string;
    constructor(nome: string, idade: number, genero: string){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}

const pessoa1 = new pessoa('aura',18,'F');
const pessoa2 = new pessoa('eren',14,'M');

console.log(pessoa2.nome)