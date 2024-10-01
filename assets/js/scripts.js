document.addEventListener("DOMContentLoaded", function() {
    const agendaLinks = document.querySelectorAll('.agenda a');
    const cards = document.querySelectorAll('.card');

    agendaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetCard = document.getElementById(link.dataset.target);

            // Ocultar todas las tarjetas
            cards.forEach(card => card.style.display = 'none');

            // Mostrar solo la tarjeta correspondiente
            targetCard.style.display = 'block';
        });
    });
});
