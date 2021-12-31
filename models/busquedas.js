const fs = require('fs');

const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogota'];
    dbPath = './db/database.json';

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async ciudad(lugar = '') {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        }
        catch (error) {
            return [];
        }


    }

    async climaLugar(lat, lon) {
        try {

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsWeather, lat, lon }
            });

            //Hace un get al api y lo guarda completo en resp
            const resp = await instance.get();

            //Del resp.data solo toma lo que esta en weather y main
            const { weather, main } = resp.data;

            return {
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
                desc: weather[0].description,
            };

        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar = '') {
        // TODO prevenir duplicados
        if (this.historial.includes(lugar.toLocaleLowerCase())) return;

        this.historial.unshift(lugar.toLocaleLowerCase());

        //Grabar en DB
        this.guardarDB();

    }

    guardarDB() {
        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {

    }
}

module.exports = Busquedas;