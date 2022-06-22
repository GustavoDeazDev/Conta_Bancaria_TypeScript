export class ContaBancaria {

    private _saldo: number
    private _numero: string
    private _agencia: string

    constructor(numero_conta: string, agencia_conta: string) {
        this._saldo = 0
        this._numero = this._validarNumero(numero_conta) ? numero_conta : '00000-0'
        this._agencia = this._validarAgencia(agencia_conta) ? agencia_conta : '0000-0'
    }

    get numero(): string {
        return this._numero
    }

    set numero(valor: string) {
        if(this._validarNumero(valor)) {
            this._numero = valor
        } else {
            console.log('Formato de número inválido')
        }
    }

    get agencia(): string {
        return this._agencia
    }

    set agencia(valor: string) {
        
        if(this._validarAgencia(valor)) {
            this._agencia = valor
        } else {
            console.log('Formato de agência inválido')
        }
    }

    consultar(): number {
        return this._saldo
    }

    depositar(valor: number): boolean {
        if (valor >= 0) {
            this._saldo += valor
            return true
        }

        return false
    }

    sacar(valor: number): boolean {
        if (valor >= 0 && this._saldo >= valor) {
            this._saldo -= valor
            return true
        }

        return false
    }

    private _validarNumero(n: string): boolean {
        const regex = /^\d{5}-\d{1}$/
        if(regex.test(n)) {
            this._numero = n
            return true
        } 

        return false
    }

    private _validarAgencia(a: string) : boolean {
        const regex = /^\d{4}-\d{1}$/
        if(regex.test(a)) {
            this._agencia = a
            return true
        }

        return false
    }
}