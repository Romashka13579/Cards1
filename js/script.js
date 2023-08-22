var Cards = document.querySelectorAll('.card');

Cards.forEach(card=>{
    card.addEventListener('click', () =>{
        var cardClone = card.cloneNode(true);
        cardClone.classList.add("cardClicked");
        card.append(cardClone);
    });
});