(function(){
    'use strict';

    let Sonda = require('./sonda');

    let Nasa = function(){
        this.sondas = ['Spirit', 'Opportunity', 'Curiosity', 'Mars Pathfinder', 'Viking', 'ExoMars'];
        this.nLancamento = 0;
    };

    Nasa.prototype.lancamento = function(planalto, posicao, direcao){
        let nome = this.sondas[this.nLancamento];
        this.nLancamento++;
        let sonda = new Sonda(this.nLancamento, nome);

        sonda.aterrissar(planalto, posicao, direcao);

        return sonda;
    };

    Nasa.prototype.enviarComando = function(sonda, comandos){
        comandos.forEach(function(comando){
            sonda.receberComando(comando);
        });
    };

    Nasa.prototype.informarPosicao = function(sonda) {
        let posicao = sonda.posicaoAtual();
        let direcao = sonda.direcaoAtual();

        console.log('Sonda:', sonda.nome, 'X:', posicao.x, 'Y:', posicao.y, 'DIR:', direcao.A);
    };

    module.exports = new Nasa();

})();