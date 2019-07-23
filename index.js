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

//buscar jogo samurai e printar

let resultado;

resultado = _.orderBy(list_games, ['nome'], ['asc']);
/*
resultado = _.filter(list_games, (jogo_atual) => {
    return jogo_atual.ano >= 1994
})
*/

console.log(resultado);
