
const argv = require('./config/yargs');

const { crearArchivo } = require('./helpers/multiplicar')

const colors = require('colors');


console.clear()

console.log(argv);


crearArchivo( argv.b, argv.l,argv.h)
    .then(console.log("correcto".rainbow))
    .catch(console.log)



