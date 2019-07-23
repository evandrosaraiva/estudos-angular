const _ = require('lodash');


let list_games = [
    {
        nome: 'Street Fighter',
        ano: 1990
    },
    {
        nome: 'Mortal Kombat',
        ano: 1994
    },
    {
        nome: 'Super Mário',
        ano: 1994
    },
    {
        nome: 'Fifa',
        ano: 1994
    },
    {
        nome: 'Samurai Shadow',
        ano: 1996
    }    
]

let resultado;

//ordena games em ordem crescente
resultado = _.orderBy(list_games, ['nome'], ['asc']);

//orderna games por ano decrescente
resultado = _.orderBy(list_games, ['ano'], ['desc']);

// lista de jogso de trás pra frente
resultado = _.reverse(list_games);

//remover da lista o FIFA
resultado = _.pullAllBy(list_games, [{ 'nome': 'Fifa' }], 'nome');
console.log(resultado);
