//cadastro de funcionário: detalhes pessoais e profissionais
class funcionario{
    nome: string;
    data_nascimento: Date;
    genero: string;
    cpf: string;
    email: string;
    posicao: string;
    especialidade: string;
    //método construtor da classe funcionário
    constructor(nome: string, data_nascimento: Date, genero: string, cpf: string, posicao: string, especialidade: string, email: string){
        this.nome = nome
        this.data_nascimento = data_nascimento
        this.genero = genero
        this.cpf = cpf
        this.posicao = posicao
        this.especialidade = especialidade
        this.email = email
    }
    mostrarDados(){
        console.log('----------dados do funcionario------------')
        console.log(`nome-------------: ${this.nome}`)
        console.log(`email------------: ${this.email}`)
        console.log(`posição----------: ${this.posicao}`)
        console.log(`cpf--------------: ${this.cpf}`)
        console.log(`data_nascimento--: ${this.data_nascimento}`)
        console.log(`genero-----------: ${this.genero}`)
        console.log(`especialidade----: ${this.especialidade}`)
    }
}

//cadastro de pacientes: dados referentes ao paciente
class pacientes{
    nome: string;
    data_nascimento: Date;
    genero: string;
    rg: string;
    cpf: string;
    numero: string;
    email: string;
    constructor(nome: string, data_nascimento: Date, genero: string, rg: string, cpf: string, numero: string, email: string){
        this.nome = nome
        this.data_nascimento = data_nascimento
        this.genero = genero
        this.cpf = cpf
        this.rg = rg
        this.numero = numero
        this.email = email
    }
    mostrarDados(){
        console.log('------------dados do paciente--------------')
        console.log(`nome-------------: ${this.nome}`)
        console.log(`genero-----------: ${this.genero}`)
        console.log(`data_nascimento--: ${this.data_nascimento}`)
        console.log(`email------------: ${this.email}`)
        console.log(`rg---------------: ${this.rg}`)
        console.log(`cpf--------------: ${this.cpf}`)
        console.log(`numero-----------: ${this.numero}`)
    }
}

//cadastro de consultas: dados específicos de cada consulta
class consultas{
    data: Date;
    convenio: boolean;
    local: string;
    medico: funcionario;
    paciente: pacientes;
    constructor(data: Date, convenio: boolean, local: string, medico: funcionario, paciente: pacientes){
        this.data = data
        this.convenio = convenio
        this.local = local
        this.medico = medico
        this.paciente = paciente
    }
    mostrarDados(){
        console.log('----------dados de consultas------------')
        console.log(`data-------------: ${this.data}`)
        console.log(`convenio---------: ${this.convenio}`)
        console.log(`local------------: ${this.local}`)
        console.log(`médico-----------: ${this.medico}`)
        console.log(`paciente---------: ${this.paciente}`)
    }
}


const funcionario = new funcionario()
const pacientes = new pacientes()
const consultas = new consultas()
