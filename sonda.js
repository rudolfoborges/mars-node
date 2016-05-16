(function() {
    'use strict';
    let DIRECAO = require('./direcao');

    let Sonda = function (lancamento, nome) {
        this.lancamento = lancamento;
        this.nome = nome;
        this.planalto = undefined;
        this.posicao = undefined;
        this.direcao = undefined;

        this.girarParaEsquerda = function () {
            this.direcao = DIRECAO[this.direcao.E];
        };

        this.girarParaDireita = function () {
            this.direcao = DIRECAO[this.direcao.D];
        };

        this.mover = function () {
            this.posicao.moverParaFrente(this.direcao);
        };
    };

    Sonda.prototype.aterrissar = function (planalto, posicao, direcao) {
        this.planalto = planalto;
        this.posicao = posicao;
        this.direcao = direcao;
    };

    Sonda.prototype.receberComando = function (comando) {
        if (comando === 'D') this.girarParaDireita();
        else if (comando === 'E') this.girarParaEsquerda();
        else if (comando === 'M') this.mover(comando);
    };

    Sonda.prototype.posicaoAtual = function () {
        return this.posicao;
    };

    Sonda.prototype.direcaoAtual = function () {
        return this.direcao;
    };

    module.exports = Sonda;

})();