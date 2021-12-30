const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogota'];

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiaGFyYWl6YSIsImEiOiJja3h0OXVrN2QzZzM0MnZvY3lkdXMweHk3In0.pO1Y9onlgYenk_omWSYGVA',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?language=es&access_token=pk.eyJ1IjoiaGFyYWl6YSIsImEiOiJja3h0OXVrN2QzZzM0MnZvY3lkdXMweHk3In0.pO1Y9onlgYenk_omWSYGVA&limit=5');
            console.log(resp.data);
            return [];
        }
        catch (error) {
            return [];
        }


    }
}

module.exports = Busquedas;