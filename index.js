const { leerInput } = require("./helpers/inquirer");

console.log('Hola mundo');

const main = async () => {
    const text = await leerInput('Hola: ');

    console.log(text)
}

main();