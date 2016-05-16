'use strict';

let nasa = require('./models/nasa');
let Planalto = require('./models/planalto');
let Posicao = require('./models/posicao');
let Direcao = require('./models/direcao');


let planalto = new Planalto(10, 10);
let posicao = new Posicao(0,0);

let sonda1 = nasa.lancamento(planalto, posicao, Direcao.NORTE);
nasa.enviarComando(sonda1, ['M', 'M', 'M', 'E', 'D', 'E', 'E', 'M']);
nasa.informarPosicao(sonda1);

let sonda2 = nasa.lancamento(planalto, posicao, Direcao.NORTE);
nasa.informarPosicao(sonda2);

let sonda3 = nasa.lancamento(planalto, posicao, Direcao.NORTE);
nasa.informarPosicao(sonda3);