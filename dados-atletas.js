class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11)
            return "Infantil"
        else if(this.idade <= 13)
            return "Juvenil"
        else if(this.idade <= 15)
            return "Intermediário"
        else if(this.idade <= 30)
            return "Adulto"
        else
            return "Sem categoria"
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        function compareNumbers(a, b) {
            return a - b;
        }

        this.notas.sort(compareNumbers)
        let notasValidas = this.notas.slice(1, 4)
        let somaNotas = 0

        notasValidas.forEach(function (nota) {
            somaNotas += nota
        })

        let media = somaNotas / notasValidas.length
        return media
    }

    obtemNomeAtleta() {
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso
    }

    obtemNotasAtleta() {
        return this.notas.join(", ")
    }

    obtemCategoria() {
        return this.calculaCategoria()
    }

    obtemIMC() {
        return this.calculaIMC()
    }

    obtemMediaValida() {
        return this.calculaMediaValida()
    }
}
