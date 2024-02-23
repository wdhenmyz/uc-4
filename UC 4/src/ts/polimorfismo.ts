import { Funcionario } from './atividade1'
// const funcionario2 = new Funcionario('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', '66753456', ['rua do Senac','numero 200','bairro','cidade']) 

class Desenvolvedor extends Funcionario{
    habilidades: string[];
    ano_expereiencia: number;
    constructor(
         nome: string,
         data_nascimento: Date, 
         genero: string, 
         cpf: string, 
         rg: string, 
         matricula: string, 
         cargo: string, 
         email: string, 
         endereco: string[], 
         habilidades: string[], 
         ano_expereiencia: number
         ){
        super(nome, data_nascimento, genero, cpf, rg, matricula, cargo, email, nome, endereco,)
        this.habilidades = habilidades
        this.ano_expereiencia = ano_expereiencia
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`habilidades------------: ${this.habilidades}`)
        console.log(`anos de experiencia----: ${this.ano_expereiencia}`)
        console.log(`---------------------------------------------------`)
    }
}
const desenvolvedor1 = new Desenvolvedor('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', ['rua do Senac','numero 200','bairro','cidade'], ['full-stack','mobile'], 20)
desenvolvedor1.mostrarDados()
