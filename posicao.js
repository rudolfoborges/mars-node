(function() {
    'use strict';

    let Posicao = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Posicao.prototype.mover = function (direcao) {
        let x = this.x + direcao.M.x;
        let y = this.y + direcao.M.y;

        return new Posicao(x, y);
    };

    module.exports = Posicao;

})();