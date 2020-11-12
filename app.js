const {crearArchivo, listarTabla} = require ('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors/safe')

let commando = argv._[0]
console.log(argv)

switch(commando){
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => {console.log(err)})
    break
    case 'crear':
        console.log(`Crear ${argv.base} ${argv.limite}`)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => {console.log(err)})
    break
    default:
        console.log('Comando no reconocido')
    
}

