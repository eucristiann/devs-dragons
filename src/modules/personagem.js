export class Personagem {
    nome
    vida
    mana
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome
        this.#level = 1
        this.vida = 100
        this.mana = 100
    }

    aumentarLevel() {
        this.level += 1  
    }

    diminuirLevel() {
        this.level -= 1
    }

    get level() {
        return this.#level
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `${this.constructor.tipo} Implacável`
        } else {
            return `${this.constructor.tipo} Iniciante`
        }
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return 'Empate!!!'
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!!`
        }
        if(personagem2.level > personagem1.level) {
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!!`
        }
    }

}