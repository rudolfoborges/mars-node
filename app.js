'use strict';

let nasa = require('./nasa');
let Planalto = require('./planalto');
let Posicao = require('./posicao');
let DIRECAO = require('./direcao');


let planalto = new Planalto(10, 10);
let posicao = new Posicao(0,0);
let NORTE = DIRECAO.NORTE;

let sonda1 = nasa.lancamento(planalto, posicao, NORTE);
nasa.enviarComando(sonda1, ['M', 'M', 'M', 'E', 'D', 'E', 'E', 'M']);
nasa.informarPosicao(sonda1);

let sonda2 = nasa.lancamento(planalto, posicao, NORTE);
nasa.informarPosicao(sonda2);

let sonda3 = nasa.lancamento(planalto, posicao, NORTE);
nasa.informarPosicao(sonda3);