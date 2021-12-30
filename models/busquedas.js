const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogota'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {

        try {                             
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            return [];
        }
        catch (error) {
            return [];
        }


    }
}

module.exports = Busquedas;