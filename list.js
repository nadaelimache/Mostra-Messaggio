/**
const mostraMessaggioButton = document.getElementById("mostraMessaggio");
const messaggioDiv = document.getElementById("messaggio");

// Aggiungiamo un gestore di eventi al pulsante per rispondere al clic
mostraMessaggioButton.addEventListener("click", function() {
    // Quando il pulsante viene cliccato, cambiamo il contenuto del div del messaggio
    messaggioDiv.textContent = "Ciao, hai cliccato il pulsante!";
}); **/

const mostraMessaggio = document.getElementById('mostraMessaggio');
const messaggio = document.getElementById('messaggio');
mostraMessaggio.addEventListener('click', function() {
    messaggio.textContent = 'Il tuo codice JavaScript funziona correttamente!';
})