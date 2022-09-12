const fileSystem = require('fs')
const colors = require('colors');

const crearArchivo = async(base = 5,listar = false,hasta =10) =>{

    try {
            let salida,consola = '';

            for (let i = 1 ; i <= hasta; i++) {
                const multiplicacion = base * i;
                salida += `${base} x ${i} = ${base*i}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.yellow} ${multiplicacion}\n`;
                
            }
            
            if( listar ){
                console.log("===========================".green);
                console.log('   Tabla del :'.green, colors.blue(base) );
                console.log("===========================".green);
                console.log(consola);    
            }
            
                            
            fileSystem.writeFile(`./salida/tabla-${base}.txt`, salida,'utf-8' ,(err)=>{
                if(err) throw err;
                return (`tabla del ${base}.txt  creado`);
    } )
    } catch (error) {
        throw error;
    }
    
    

}






module.exports = {
    crearArchivo
}