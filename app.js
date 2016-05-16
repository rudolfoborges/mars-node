'use strict';

let nasa = require('./models/nasa');
let Planalto = require('./models/planalto');
let Posicao = require('./models/posicao');
let DIRECAO = require('./models/direcao');


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