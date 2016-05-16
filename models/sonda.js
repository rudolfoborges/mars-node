(function() {
    'use strict';
    let DIRECAO = require('./direcao');

    let Sonda = function (lancamento, nome) {
        this.lancamento = lancamento;
        this.nome = nome;
        this.planalto = undefined;
        this.posicao = undefined;
        this.direcao = undefined;

        let self = this;

       function girarParaEsquerda () {
            self.direcao = DIRECAO[self.direcao.E];
        };

        function girarParaDireita () {
            self.direcao = DIRECAO[self.direcao.D];
        };

        function mover () {
            var novaPosicao = self.posicao.mover(self.direcao);
            if(self.planalto.posicaoConhecida(novaPosicao)){
                self.posicao = novaPosicao;
            }
        };

        this.acoes = {
            E: girarParaEsquerda,
            D: girarParaDireita,
            M: mover
        };
    };

    Sonda.prototype.aterrissar = function (planalto, posicao, direcao) {
        this.planalto = planalto;
        this.posicao = posicao;
        this.direcao = direcao;
    };

    Sonda.prototype.receberComando = function (comando) {
        if(comando === 'D' || comando == 'E' || comando == 'M'){
            this.acoes[comando]();
        }
    };

    Sonda.prototype.posicaoAtual = function () {
        return this.posicao;
    };

    Sonda.prototype.direcaoAtual = function () {
        return this.direcao;
    };

    module.exports = Sonda;

})();