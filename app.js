const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//toma las funciones del archivo multiplicar y las importa para cuando sean llamadas
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

//toma el valor del primer elemento en este caso seria LISTAR O CREAR
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


//console.log('limite', argv.limite);



// let parametro = argv[2];
// let base = parametro.split('split')[1]