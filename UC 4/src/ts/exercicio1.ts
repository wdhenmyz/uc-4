class pessoa {
    public nome: string;
    protected email: string;
    public data_nascimento: Date;
    public numero: string;
    //protected rg: string;
    protected cpf: string;
    public endereco: string[];
    protected genero?: string;
    constructor(nome: string, data_nascimento: Date, email: string, numero: string, cpf: string, endereco: string[], genero?: string) {
        this.nome = nome
        this.data_nascimento = data_nascimento
        this.email = email
        this.numero = numero
        this.cpf = cpf
        this.endereco = endereco
        this.genero = genero
    }
    mostrarDados() {

    }

}

//cadastro de funcionário: detalhes pessoais e profissionais
class Funcionario extends pessoa {
    protected matricula: string;
    protected cargo: string;
    //método construtor da classe funcionário
    constructor(
        nome: string,           // nome de funcionário
        data_nascimento: Date,  // data de nascimento do funcionário
        cpf: string,            // cpf do funcionário
        //rg: string,           
        matricula: string,      // matrícula do funcionário
        cargo: string,          // cargo do funcionário
        email: string,          // email do funcionário
        numero: string,         // telefone do funcionário
        endereco: string[],     // endereço do funcionário
        genero?: string,) {      // genero do funcionário
        super(nome, data_nascimento, email, numero, cpf, endereco, genero)
        this.matricula = matricula
        this.cargo = cargo
    }
    mostrarDados() {
        console.log('----------dados de funcionário-------------------')
        super.mostrarDados()
        console.log(`posição----------------: ${this.cargo}`)
        console.log(`matricula--------------: ${this.matricula}`)
    }
}
//const funcionario1 = new Funcionario('zezinho',new Date('1998-10-25'),'masculino', '999999999-99', '5395999257', 'informatica', 'professor', 'fulano@msn.com', '66753456', ['rua do Senac','numero 200','bairro','cidade',])
//funcionario1.mostrarDados()

//cadastro de pacientes: dados referentes ao paciente
class pacientes extends pessoa {
    protected sintomas: string[];
    public classificacao_risco: string;
    constructor(sintomas: string[], classificacao_risco: string, nome: string, data_nascimento: Date, genero: string, cpf: string, numero: string, email: string, endereco: string[]) {
        super(nome, data_nascimento, email, numero, cpf, endereco, genero)
        this.sintomas = sintomas
        this.classificacao_risco = classificacao_risco
    }
    mostrarDados() {
        console.log('------------dados do paciente--------------')
        super.mostrarDados
        console.log(`sintomas---------------: ${this.sintomas}`)
        console.log(`nivel de risco---------: ${this.classificacao_risco}`)
    }
}
//const paciente1 = new pacientes()


//cadastro de consultas: dados específicos de cada consulta
class consultas {
    protected data: Date;
    protected convenio: boolean;
    protected local: string;
    protected medico: Funcionario;
    protected paciente: pacientes;
    constructor(data: Date, convenio: boolean, local: string, medico: Funcionario, paciente: pacientes) {
        this.data = data
        this.convenio = convenio
        this.local = local
        this.medico = medico
        this.paciente = paciente
    }
    mostrarDados() {
        console.log('----------dados de consultas------------')
        console.log(`data-------------: ${this.data}`)
        console.log(`convenio---------: ${this.convenio}`)
        console.log(`local------------: ${this.local}`)
        console.log(`médico-----------: ${this.medico}`)
        console.log(`paciente---------: ${this.paciente}`)
    }
}

//const consulta1 = new consultas()
// adicinando um evento
document.addEventListener('DOMContentLoaded',
    function () {
        const form = document.querySelector('#formFuncionario');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const nome = (document.getElementById('nome') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const numero = (document.getElementById('telefone') as HTMLInputElement).value;
                const data_nascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
                const endereco = (document.getElementById('endereco') as HTMLInputElement).value;
                const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
                const genero = (document.getElementById('genero') as HTMLInputElement).value;
                const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
                const matricula = (document.getElementById('matricula') as HTMLInputElement).value;

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
        } else {
            console.error('o formulario não foi encontrado');
        }
    })



