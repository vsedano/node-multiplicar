const fs = require('fs')
const colors = require('colors')

let crearArchivo = (base, limite) => {
    return new Promise ((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return
        }
        let data = '' 

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err) 
                reject(err)
            else 
                resolve (`tabla-${base}.txt`)
        })
    })
}

let listarTabla = (base, limite) => {
    return new Promise ((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return
        }
        console.log('==============='.green)
        console.log(`Tabla del ${base}`.green)
        console.log('==============='.green)
        let data = ''
        for(var i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }
        resolve(data)
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
