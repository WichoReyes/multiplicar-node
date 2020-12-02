//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================'.red);
    console.log(`Tabla del ${ base }`.red);
    console.log('================'.red);

    for (let j = 1; j <= limite; j++) {

        console.log(`${base} x  ${ j } = ${base*j}\n`);
    }

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido  ${ base } no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        //fs.writeFile( 'nombre del archivo', 'Lo que se quiere escribir en el archivo, 'La funcion de confirmacion');
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject('Ocurrio un error al escribir la data', err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });
    });
}

//Sirve para exportar funciones para que se puedan utilizar en otros archivos
module.exports = {
    crearArchivo,
    listarTabla
}