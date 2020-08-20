const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    //.command viene de la libreria yargs y hace que puedas describir el comando que se puede escribir en la app.js
    // por ej. el comando listar tiene 2 valores que son base y limite
    //(BASE es necesario porque tiene la opcion demand que lo hace obligatorio )
    //(LIMITE no es necesario porque no tiene la opcion demand, pero tiene la opcion default que hace que tenga un valor inicial)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    //help hace que describa los comandos que tiene app
    .help()
    //sirve para tomar los valores como base o limite por ej. argv.base o argv.limite
    .argv;


module.exports = {
    argv
}