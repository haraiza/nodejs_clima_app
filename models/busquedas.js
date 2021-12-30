class Busquedas {

    historial = ['Tegucigalpa','Madrid','San Jose','Bogota'];

    constructor(){
        // TODO: leer DB si existe
    }

    async ciudad(lugar=''){
        //peticion http
        console.log(lugar);

        return []; //retornar los lugare que coincida con el lugar buscado
    }
}

module.exports = Busquedas;