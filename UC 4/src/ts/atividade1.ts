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

//cadastro de consultas: dados específicos de cada consulta
class consultas{
    data: Date;
    tipo: string;
    local: string;
    medico: funcionario;
    paciente: pacientes;
    constructor(data: Date, tipo: string, local: string, medico: funcionario, paciente: pacientes){
        this.data = data
        this.tipo = tipo
        this.local = local
        this.medico = medico
        this.paciente = paciente
    }
}



const funcionario = new funcionario()
const pacientes = new pacientes()
const consultas = new consultas()
