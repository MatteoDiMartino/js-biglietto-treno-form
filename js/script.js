// Chiedo età
// Chiedo km
// Definisco costo
// Definisco sconti
// Calcolo finale
// Seleziono bottone
// genera risultato

const buttonResult = document.querySelector('#btn-result');
console.log (buttonResult)
buttonResult.addEventListener('click', function () {
    const userage = parseInt(document.querySelector('#inAge').value);
    console.log (userage);

    const kmUser = parseInt(document.querySelector('#inKm').value);
    console.log (kmUser);

    const costKm = 0.21;

    const totalTicket = (kmUser * costKm);
    console.log (totalTicket);
});
