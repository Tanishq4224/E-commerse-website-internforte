const filterButtons = document.querySelectorAll('.filter-buttons button')
const fiterableCards = document.querySelectorAll('.fiterable-cards .card')



const filterCards = e => {
    document.querySelector(".active")?.classList.remove("active")
    e.target.classList.add("active")
    fiterableCards.forEach(card => {
        card.classList.add('hide')
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name == 'all') {
            card.classList.remove('hide')
        }
    })


}

const addHref = e => {
    e.innerHtml('a')
}




filterButtons.forEach(button => button.addEventListener("click", filterCards))
