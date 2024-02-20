"use strict";
//cadastro de funcionário: detalhes pessoais e profissionais
class funcionario {
    nome;
    idade;
    genero;
    cpf;
    email;
    posicao;
    especialidade;
    constructor(nome, idade, genero, cpf, posicao, especialidade, email) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.cpf = cpf;
        this.posicao = posicao;
        this.especialidade = especialidade;
        this.email = email;
    }
}
//cadastro de pacientes: dados referentes ao paciente
class pacientes {
    nome;
    idade;
    genero;
    cpf;
    numero;
    email;
    constructor(nome, idade, genero, cpf, numero, email) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.cpf = cpf;
        this.numero = numero;
        this.email = email;
    }
}
//cadastro de consultas: dados específicos de cada consulta
class consultas {
    data;
    tipo;
    local;
    medico;
    paciente;
    constructor(data, tipo, local, medico, paciente) {
        this.data = data;
        this.tipo = tipo;
        this.local = local;
        this.medico = medico;
        this.paciente = paciente;
    }
}
const funcionario = new funcionario();
const pacientes = new pacientes();
const consultas = new consultas();
