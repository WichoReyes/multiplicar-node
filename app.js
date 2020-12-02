//Significa una destructuracion 
// const { } = ....

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado', colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//split sirve para separar de un string a un arreglo
//let base = parametro.split('=')[1];

// process.argv nos dice en donde esta ubicado node y en donde esta nuestro archivo

//console.log('Limite', argv.limite);
//console.log(argv2);