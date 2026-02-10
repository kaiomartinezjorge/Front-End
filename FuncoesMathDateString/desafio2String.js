const texto = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

const textotrim = texto.trim();

const nomesSujos = textotrim.split(", ");

console.log(nomesSujos);

let nomesLimpo = [];

for (let i = 0; i < nomesSujos.length; i++) {
  nomesLimpo[i] =
    nomesSujos[i].charAt(0).toUpperCase() +
    nomesSujos[i].slice(1).toLowerCase();
}

console.log(nomesLimpo);
