//requireds 
//fs filesystem sirve para utilizar la funcion fs.writeFile que hace que cree archivo 
const fs = require('fs');
const colors = require('colors');
//funcion para listar una tabla que tiene como parametros base y limite
let listarTabla = (base, limite = 10) => {

    console.log('========='.green);
    console.log(`tabla de ${base}`.green);
    console.log('========='.green);



    //for sirve para tomar los valores y hacer la multiplicacion
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }

}

let crearArchivo = (base, limite = 10) => {
        //promise hace que haya 2 opciones resolve or reject (reject en caso de que no sea un numero)
        //en caso de que es un numero se hace la multiplicacion y se crea el archivo con fs.writetable
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor introducido ${base} no es un numero`);
                return;
            }

            let data = '';

            for (let i = 1; i <= limite; i++) {
                //se guarda en data todos los datos de la multiplicacion
                data += `${i} * ${base} = ${base * i}\n`;
            }

            //se guarda el archivo DATA con el nombre "tabla-${base}-al-${limite}.txt"
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}-al-${limite}.txt`)
                console.log(`the file tabla-${base} ha sido creado`);
            });

        });
    }
    // se exporta las funciones para poder ser ocupadas en app.js
module.exports = {
    crearArchivo,
    listarTabla
}