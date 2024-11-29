// Funkcja do otwierania modala z powiększonym obrazkiem
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";  // Pokazuje modal
    modalImg.src = img.src; // Ustawia źródło obrazu w modalnym oknie
}

// Funkcja do zamykania modala
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";  // Ukrywa modal
}

// Zamykanie modala po kliknięciu w tło (poza obrazkiem)
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}
