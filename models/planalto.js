(function() {
    'use strict';

    let Planalto = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Planalto.prototype.posicaoConhecida = function (posicao) {
        return posicao.x <= this.x && posicao.y < this.y;
    };

    module.exports = Planalto;
})();