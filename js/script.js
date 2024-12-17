// Input dati utenti
let age = parseInt(prompt("inserire età passeggero"));
let km = parseInt(prompt("inserire numero di kilometri da percorrere"));
let sconto;

// Definizione prezzo/km
const prezzoKm = 0.21;

// Calcolo prezzo biglietto in base ai km (2 cifre decimali)
let prezzoBiglietto = (km * prezzoKm).toFixed(2);

// SE il passeggero ha meno di 12 anni, applica uno sconto del 20%
if (age <= 12){
    sconto = 2/10;
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
    console.log(prezzoBiglietto);
}

// ALTRIMENTI SE il passeggero ha più di 65 anni, applica uno sconto del 40%
else if(age >= 65){
    sconto = 4/10;
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
    console.log(prezzoBiglietto);
}
// ALTRIMENTI riporta il prezzo base
else{
    console.log(prezzoBiglietto);
    
}