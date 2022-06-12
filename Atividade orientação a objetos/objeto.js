/*criando uma classe ContaBancaria,
com os parâmetros,(agencia, numero, tipo e saldo)*/

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    /*Construindo dentro de ContaBancaria
    o método getter de saldo */

    get saldo() {
        return this._saldo;
    }

    /*Construindo dentro de ContaBancaria
    o método setter de saldo */

    set saldo(valor) {
        this._saldo = valor;
    }

    /*Criando dentro de ContaBancaria o método sacar */

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada'
        }
        this._saldo += -valor;

        return this._saldo;
    }

    /*Criando dentro de ContaBancaria o método depositar */

    depositar(valor) {
        this._saldo += +valor;

        return this._saldo;
    }
}

/*Criando uma classe-filha chamada ContaCorrente
que herda apenas os parâmetros(agencia e numero) 
da classe pai ContaBancaria e ainda possua o parâmetro cartaoCredito, 
fazendo com que o tipo seja 'conta corrente' por padrão.*/

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    /*Construindo dentro de ContaCorrente
    o método getter de cartaoCredito */

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    /*Construindo dentro de ContaCorrente
    o método setter de cartaoCredito */

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;

    }
}

/*Criando uma classe-filha chamada ContaPoupanca
que herda apenas os parâmetros(agencia e numero) da classe pai 
ContaBancaria, fazendo com que o tipo seja 'conta Poupança' por padrão.*/

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
}

/*Criando uma classe-filha chamada ContaUniversitaria
que herda apenas os parâmetros(agencia e numero) da classe pai 
ContaBancaria, fazendo com que o tipo seja 'conta Universitária' por padrão.*/

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    /*Criando dentro de ContaUniversitaria o método sacar
    fazendo com que o saque seja possível de ser realizado
    até 500 reais por vez */

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada'
        }

        this._saldo += -valor;
    }
}