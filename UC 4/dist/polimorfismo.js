"use strict";
/* import { Funcionario } from './atividade1'
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
    }
}
//const desenvolvedor1 = new Desenvolvedor('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', ['rua do Senac','numero 200','bairro','cidade'], ['full-stack','mobile'], 20)
//desenvolvedor1.mostrarDados()

class frontEnd extends Desenvolvedor{
    tecnologias: string[];
    framework: string[];
    conhecimentos: string[];
    constructor( nome: string,
        data_nascimento: Date,
        genero: string,
        cpf: string,
        rg: string,
        matricula: string,
        cargo: string,
        email: string,
        endereco: string[],
        habilidades: string[],
        ano_expereiencia: number,
        tecnologias: string[],
        framework: string[],
        conhecimentos: string[]){
            super(nome, data_nascimento, genero, cpf, rg, matricula, cargo, email, endereco, habilidades, ano_expereiencia,)
            this.tecnologias = tecnologias
            this.framework = framework
            this.conhecimentos = conhecimentos
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`tecnologias------------: ${this.tecnologias}`)
        console.log(`framework--------------: ${this.framework}`)
        console.log(`conhecimentos----------: ${this.conhecimentos}`)
    }
}
//const frontend1 = new frontEnd('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', ['rua do Senac','numero 200','bairro','cidade'], ['full-stack','mobile'], 20, ['html','ccs'], ['javascript'], ['Frameworks' , 'Bibliotecas' , 'Responsividade' , 'Mobile First'])
//frontend1.mostrarDados()

class backEnd extends Desenvolvedor{
    bancoDeDados: string[];
    framework: string[];
    servidor: string[];
    linguagem_programação: string[];
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
        ano_expereiencia: number,
        bancoDeDados: string[],
        framework: string[],
        servidor: string[],
        linguagem_programação: string[],){
            super(nome, data_nascimento, genero, cpf, rg, matricula, cargo, email, endereco, habilidades, ano_expereiencia,)
            this.bancoDeDados = bancoDeDados
            this.framework = framework
            this.servidor = servidor
            this.linguagem_programação = linguagem_programação
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`tipos de banco de dados: ${this.bancoDeDados}`)
        console.log(`framework--------------: ${this.framework}`)
        console.log(`servidores-------------: ${this.servidor}`)
        console.log(`tipos de linguagem-----: ${this.linguagem_programação}`)
    }
}
//const backEnd1 = new backEnd('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', ['rua do Senac','numero 200','bairro','cidade'], ['full-stack','mobile'], 20, ['relacionais' , 'distribuídos'], ['Laravel' , 'CodeIgniter'], ['Back4app' , 'Firebase'], ['JavaScript' , 'Python'])
//backEnd1.mostrarDados()

class fullStack extends Desenvolvedor{
    bancoDeDados: string[];
    framework: string[];
    servidor: string[];
    linguagem_programação: string[];
    especilidades: string[];
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
        ano_expereiencia: number,
        bancoDeDados: string[],
        framework: string[],
        servidor: string[],
        linguagem_programação: string[],
        especialidades: string[],){
    super(nome, data_nascimento, genero, cpf, rg, matricula, cargo, email, endereco, habilidades, ano_expereiencia,)
        this.bancoDeDados = bancoDeDados
        this.framework = framework
        this.servidor = servidor
        this.linguagem_programação = linguagem_programação
        this.especilidades = especialidades
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`tipos de banco de dados: ${this.bancoDeDados}`)
        console.log(`framework--------------: ${this.framework}`)
        console.log(`servidores-------------: ${this.servidor}`)
        console.log(`tipos de linguagem-----: ${this.linguagem_programação}`)
        console.log(`tecnologias------------: ${this.servidor}`)
        console.log(`especialidades---------: ${this.especilidades}`)
    }
}
const fullStack1 = new fullStack('zezinho',new Date('1998-10-25'),'M', '999999999-99', '5395999257', 'informatica', 'desenvolvedor', 'fulano@msn.com', ['rua do Senac','numero 200','bairro','cidade'], ['UX','soft skills'], 20, ['relacionais' , 'distribuídos'], ['javascript', 'Python' , 'html' , 'ccs'], ['Laravel' , 'CodeIgniter'], ['Back4app' , 'Firebase'], ['full-stack','mobile'])
fullStack1.mostrarDados()






 */ 
