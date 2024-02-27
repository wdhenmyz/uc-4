"use strict";
class pessoa {
    nome;
    email;
    data_nascimento;
    numero;
    //protected rg: string;
    cpf;
    endereco;
    genero;
    constructor(nome, data_nascimento, email, numero, cpf, endereco, genero) {
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.numero = numero;
        this.cpf = cpf;
        this.endereco = endereco;
        this.genero = genero;
    }
    mostrarDados() {
    }
}
//cadastro de funcionário: detalhes pessoais e profissionais
class Funcionario extends pessoa {
    matricula;
    cargo;
    //método construtor da classe funcionário
    constructor(nome, // nome de funcionário
    data_nascimento, // data de nascimento do funcionário
    cpf, // cpf do funcionário
    //rg: string,           
    matricula, // matrícula do funcionário
    cargo, // cargo do funcionário
    email, // email do funcionário
    numero, // telefone do funcionário
    endereco, // endereço do funcionário
    genero) {
        super(nome, data_nascimento, email, numero, cpf, endereco, genero);
        this.matricula = matricula;
        this.cargo = cargo;
    }
    mostrarDados() {
        console.log('----------dados de funcionário-------------------');
        super.mostrarDados();
        console.log(`posição----------------: ${this.cargo}`);
        console.log(`matricula--------------: ${this.matricula}`);
    }
}
//const funcionario1 = new Funcionario('zezinho',new Date('1998-10-25'),'masculino', '999999999-99', '5395999257', 'informatica', 'professor', 'fulano@msn.com', '66753456', ['rua do Senac','numero 200','bairro','cidade',])
//funcionario1.mostrarDados()
//cadastro de pacientes: dados referentes ao paciente
class pacientes extends pessoa {
    sintomas;
    classificacao_risco;
    constructor(sintomas, classificacao_risco, nome, data_nascimento, genero, cpf, numero, email, endereco) {
        super(nome, data_nascimento, email, numero, cpf, endereco, genero);
        this.sintomas = sintomas;
        this.classificacao_risco = classificacao_risco;
    }
    mostrarDados() {
        console.log('------------dados do paciente--------------');
        super.mostrarDados;
        console.log(`sintomas---------------: ${this.sintomas}`);
        console.log(`nivel de risco---------: ${this.classificacao_risco}`);
    }
}
//const paciente1 = new pacientes()
//cadastro de consultas: dados específicos de cada consulta
class consultas {
    data;
    convenio;
    local;
    medico;
    paciente;
    constructor(data, convenio, local, medico, paciente) {
        this.data = data;
        this.convenio = convenio;
        this.local = local;
        this.medico = medico;
        this.paciente = paciente;
    }
    mostrarDados() {
        console.log('----------dados de consultas------------');
        console.log(`data-------------: ${this.data}`);
        console.log(`convenio---------: ${this.convenio}`);
        console.log(`local------------: ${this.local}`);
        console.log(`médico-----------: ${this.medico}`);
        console.log(`paciente---------: ${this.paciente}`);
    }
}
//const consulta1 = new consultas()
// adicinando um evento
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#formFuncionario');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const numero = document.getElementById('telefone').value;
            const data_nascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            const cargo = document.getElementById('cargo').value;
            const matricula = document.getElementById('matricula').value;
            //armazenar os dados no localstorage
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', numero);
            localStorage.setItem('dataNascimento', data_nascimento);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            //redirecionar para a pegina da tabela
            window.location.href = './funcionario.html';
        });
    }
    else {
        console.error('o formulario não foi encontrado');
    }
});
