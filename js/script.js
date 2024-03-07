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

    let discount
    if (userage < 18) {
        discount = (totalTicket * 0.20);
    } else if (userage > 65) {
        discount = (totalTicket * 0.40);
    } else {
        discount = 0;
    }
    console.log (discount);

    let finalPrice = (totalTicket - discount);
    console.log (finalPrice);

    finalPrice = document.querySelector('#risultato').innerHTML = 'Il costo è di ' + finalPrice + ' euro';
});

const buttonReset = document.querySelector('#btn-reset');
console.log (buttonReset)
buttonReset.addEventListener('click', function () {
    userage = parseInt(document.querySelector('#inAge').value = '');
    kmUser = parseInt(document.querySelector('#inKm').value = '');
    finalPrice = document.querySelector('#risultato').innerHTML = '';
});
