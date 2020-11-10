export default class validaCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    novoCpf() {
        const cpfPuro = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfPuro);
        const digito2 = this.geraDigito(cpfPuro + digito1);
    }

    static geraDigito(cpfPuro) {
        let total = 0;
        let reverso = cpfPuro.length + 1;

        for (let i of cpfPuro) {
            total += reverso * Number(i);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }


    isSeque() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSeque()) return false;
        this.novoCpf();

        return true;
    }


}

console.log("teste");