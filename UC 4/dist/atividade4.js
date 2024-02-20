"use strict";
//cadastro de projetos
class projetos {
    nome;
    dataCriação;
    dataPrazo;
    tipo;
    equipeResponsavel;
    progresso;
    constructor(nome, dataCriação, dataPrazo, tipo, equipeResponsavel, progresso) {
        this.nome = nome;
        this.dataCriação = dataCriação;
        this.dataPrazo = dataPrazo;
        this.tipo = tipo;
        this.equipeResponsavel = equipeResponsavel;
        this.progresso = progresso;
    }
}
//organização de tarefas
class controle {
    tarefas;
    prazoConclusao;
    responsavel;
    status;
    constructor(tarefas, prazoConclusao, responsavel, status) {
        this.tarefas = tarefas;
        this.prazoConclusao = prazoConclusao;
        this.responsavel = responsavel;
        this.status = status;
    }
}
//comunicação
class comunicacao {
    pessoa;
    id;
    arquivos;
    registro1;
    registro2;
    constructor(pessoa, id, arquivos, registro1, registro2) {
        this.pessoa = pessoa;
        this.id = id;
        this.arquivos = arquivos;
        this.registro1 = registro1;
        this.registro2 = registro2;
    }
}
