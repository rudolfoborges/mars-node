(function() {
    'use strict';

    let Posicao = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Posicao.prototype.mover = function (direcao) {
        this.x += direcao.M.x;
        this.y += direcao.M.y;
    };

    module.exports = Posicao;

})();