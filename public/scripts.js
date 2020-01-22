const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        recipeId = card.getAttribute('id')
        window.location.href = `/recipe/${recipeId}`
    })
}


const contentList = document.querySelectorAll('.content-list')

for (let attribute of contentList) {
    const button = attribute.querySelector('button')
    const content = attribute.querySelector('.content')
    button.addEventListener("click", function(){
        if (button.innerHTML == "MOSTRAR") {
            content.classList.add('show-content')
            button.innerHTML = "ESCONDER"
        }
        else if (button.innerHTML == "ESCONDER") {
            content.classList.remove('show-content')
            button.innerHTML = "MOSTRAR"
        }
    })
}