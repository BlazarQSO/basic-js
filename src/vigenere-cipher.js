class VigenereCipheringMachine {
    constructor(machine = true) {
        this.machine = machine;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.tabulaRecta = [];
        this.tabulaLine = {};
        this.alphabet.forEach((item, index) => {
            this.tabulaLine[item] = index;
            this.tabulaRecta.push([...this.alphabet.slice(index), ...this.alphabet.slice(0, index)]);
        });
    }
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }

        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        let indexKey = 0;
        const keyLength = key.length;

        for (let i = 0; i < message.length; i += 1) {
            if (this.alphabet.includes(message[i])) {
                result += this.tabulaRecta[this.tabulaLine[message[i]]][this.tabulaLine[key[indexKey]]];
                indexKey += 1;
                if (indexKey === keyLength) {
                    indexKey = 0;
                }
            } else {
                result += message[i]
            }
        }
        if (this.machine) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error();
        }

        let result = '';
        let indexKey = 0;
        key = key.toUpperCase();
        const keyLength = key.length;

        for (let i = 0; i < encryptedMessage.length; i += 1) {
            if (this.alphabet.includes(encryptedMessage[i])) {
                const index = this.tabulaRecta.findIndex((item, index) =>
                    item[this.tabulaLine[key[indexKey]]] === encryptedMessage[i]
                );
                result +=  this.tabulaRecta[index][0];
                indexKey += 1;
                if (indexKey === keyLength) {
                    indexKey = 0;
                }
            } else {
                result += encryptedMessage[i];
            }
        }
        if (this.machine) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
