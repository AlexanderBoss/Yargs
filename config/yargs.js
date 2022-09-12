

const argv =require('yargs')

        .options('b',{
            alias:"base",
            type:"number",
            demandOption:true,
            describe : "Es la base de la tabla de multiplicar"
            
        })
        .options('l',{
            alias:"listar",
            type:"boolean",
            default:false,
            base:"muestra la tabla de multiplicar" 
        })
        .options('h',{
            alias:"hasta",
            type:"number",
            default:10,
            base:"Este es el numero hasta donde quieres la tabla" 
        })

        .check((argv,options)=>{
            console.log('yargs',argv);
            if(isNaN(argv.b)){
                throw 'la base tiene que ser un numero'
            }

            return true;
        })
        .argv;


module.exports= argv;
