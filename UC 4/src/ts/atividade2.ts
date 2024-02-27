/* //cadastras os livros da biblioteca
class livros{
    public titulo: string;
    public autor: string;
    public editora: string;
    public categoria: string;
    public copiasDisponiveis: number;
    constructor(titulo: string, autor: string, editora: string, categoria: string, copiasDisponiveis: number){
        this.autor = autor
        this.categoria = categoria
        this.copiasDisponiveis = copiasDisponiveis
        this.editora = editora
        this.titulo = titulo
    }
    mostrarDados(){
        console.log('--------------dados dos livros----------------')
        console.log(`título--------------: ${this.titulo}`)
        console.log(`autor---------------: ${this.autor}`)
        console.log(`editora-------------: ${this.editora}`)
        console.log(`categoria-----------: ${this.categoria}`)
        console.log(`copias disponiveis--: ${this.copiasDisponiveis}`)
    }
}

//cadastrar usuarios da biblioteca
abstract class usuario{
    public nome: string;
    protected endereco: string;
    protected telefone: string;
    protected cpf: string;
    protected historico: Array<string>;
    constructor(nome: string, endereco: string, telefone: string, cpf: string, historico: Array<string>,){
        this.cpf = cpf
        this.endereco = endereco
        this.historico = historico
        this.nome = nome
        this.telefone = telefone
    }
    mostrarDados(){
    }
}
  


//cadastrar os emprestimos feitos na biblioteca
class emprestimos{
    protected registro: Array<string>;
    protected dataEmprestimo: Date;
    protected dataDevolucao: Date;
    protected info: usuario;
    protected livros: livros;
    constructor(registro: Array<string>, dataEmprestimo: Date, dataDevolucao: Date, info: usuario, livros : livros){
        this.dataDevolucao = dataDevolucao
        this.dataEmprestimo = dataEmprestimo
        this.info = info
        this.livros = livros
        this.registro = registro
    }
    mostrarDados(){
        console.log('-------------dados de empréstimos---------------')
        console.log(`registro--------------: ${this.registro}`)
        console.log(`data de emprestimo----: ${this.dataEmprestimo}`)
        console.log(`date de devolução-----: ${this.dataDevolucao}`)
        console.log(`informações-----------: ${this.info}`)
        console.log(`livros----------------: ${this.livros}`)
    }
}

//const livro1 = new livros('orion','eren','casa','aventura',23)
//console.log(livro1)
//const usuario1 = new usuario()
//const emprestimo1 = new emprestimos() */