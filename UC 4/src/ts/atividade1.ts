//cadastro de funcionário: detalhes pessoais e profissionais
class funcionario{
    nome: string;
    idade: number;
    genero: string;
    cpf: string;
    email: string;
    posicao: string;
    especialidade: string;
    constructor(nome: string, idade: number, genero: string, cpf: string, posicao: string, especialidade: string, email: string){
        this.nome = nome
        this.idade = idade
        this.genero = genero
        this.cpf = cpf
        this.posicao = posicao
        this.especialidade = especialidade
        this.email = email
    }
}

//cadastro de consultas: dados específicos de cada consulta
class consultas{
    data: Date
    tipo: string
    local: string
    constructor(data: Date, tipo: string, local: string){
        this.data = data
        this.tipo = tipo
        this.local = local
    }
}

//cadastro de pacientes: dados referentes ao paciente
class pacientes{
    nome: string;
    idade: number;
    genero: string;
    cpf: string;
    numero: string;
    email: string;
    constructor(nome: string, idade: number, genero: string, cpf: string, numero: string, email: string){
        this.nome = nome
        this.idade = idade
        this.genero = genero
        this.cpf = cpf
        this.numero = numero
        this.email = email
    }
}

const funcionario = new funcionario()

const consultas = new consultas()

const pacientes = new pacientes()