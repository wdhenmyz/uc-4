//cadastro de projetos
class projetos{
    nome: string;
    dataCriação: Date;
    dataPrazo: Date;
    tipo: string;
    equipeResponsavel: string;
    progresso: [string, string, string, Date, Date];
    constructor(nome: string, dataCriação: Date, dataPrazo: Date, tipo: string, equipeResponsavel: string, progresso: [string, string, string, Date, Date]){
        this.nome = nome
        this.dataCriação = dataCriação
        this.dataPrazo = dataPrazo
        this.tipo = tipo
        this.equipeResponsavel = equipeResponsavel
        this.progresso = progresso
    }
}

//organização de tarefas
class controle{
    tarefas: Array<string>;
    prazoConclusao: Date;
    responsavel: string;
    status: [string, string, Date];
    constructor(tarefas: Array<string>, prazoConclusao: Date, responsavel: string, status: [string, string, Date]){
        this.tarefas = tarefas
        this.prazoConclusao = prazoConclusao
        this.responsavel = responsavel
        this.status = status
    }
}

//comunicação
class comunicacao{
    pessoa: Array<string>;
    id: Array<string>;
    arquivos: Array<string>;
    registro1: Array<controle>;
    registro2: Array<projetos>;
    constructor(pessoa: Array<string>, id: Array<string>, arquivos: Array<string>, registro1: Array<controle>, registro2: Array<projetos>){
        this.pessoa = pessoa
        this.id = id
        this.arquivos = arquivos
        this.registro1 = registro1
        this.registro2 = registro2
    }

}