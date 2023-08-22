var Cards = document.querySelectorAll('.card');

Cards.forEach(card => {
    card.addEventListener('click', () => {
            for (i = 0; i < 4; i++) {
                loop(i, card);
            }
    });
});
  function loop(i, card){
    setTimeout(function(){
        var cardClone = card.querySelector('.card-image').cloneNode(true);
        if (i % 2 == 0) {
            cardClone.classList.add("cardClicked1");
        }
        else {
            cardClone.classList.add("cardClicked2");
        }
        card.append(cardClone);
      }, (750 * i-1));
  }