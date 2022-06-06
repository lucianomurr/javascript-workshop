const prompt = require("prompt-sync")({ sigint: true });
const name = prompt("Come ti chiami? ");
console.log(`Ciao ${name}, sono felice di vederti qui!`);