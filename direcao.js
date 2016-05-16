(function() {
    'use strict';

    let DIRECAO = {
        NORTE: {A: 'NORTE', E: 'OESTE', D: 'LESTE', M: {x: 0, y: 1}},
        LESTE: {A: 'LESTE', E: 'NORTE', D: 'SUL', M: {x: 1, y: 0}},
        SUL: {A: 'SUL', E: 'LESTE', D: 'OESTE', M: {x: 0, y: -1}},
        OESTE: {A: 'OESTE', E: 'SUL', D: 'NORTE', M: {x: -1, y: -0}}
    };

    module.exports = DIRECAO;
})();