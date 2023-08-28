const card = document.querySelector(".card__inner");
let btn = document.querySelector('.btn')
const ratings = document.querySelectorAll('.rating')
const panel = document.querySelector('.panel-container')
let selectedRating = 'Geri bildirim seçmediniz!'
let h3 = document.querySelector('.h3')
console.log(h3);







ratings.forEach((rating) =>
  rating.addEventListener('click', (e) => {
    //console.log(e.target.parentNode)
    if (e.target.parentNode.classList.contains('rating')) {
      //console.log(e.target)
      removeActive()
      e.target.parentNode.classList.add('active')
      //console.log(e.target.nextElementSibling.innerHTML)
       h3.innerHTML = 'Geri bildiriminiz: ' + e.target.nextElementSibling.innerHTML 
    }
  }) 
) 

card.addEventListener("dblclick", function () {
  card.classList.toggle('is-flipped');

}); 

btn.addEventListener("click", function () {
  card.classList.toggle('is-flipped');
  
}); 

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
   
  }
}

