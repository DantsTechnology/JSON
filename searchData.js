const input = document.querySelector(".input_search");
const serchContainer = document.querySelector(".serch_container");
const deleteSearch = document.querySelector('.delete_search')
const backC = document.querySelector('.container-back')
const mainC = document.querySelector('.main_category')

function deleteSearchSH(scale, visible_hidden) {
   deleteSearch.style.transform = `scale(${scale})`
   deleteSearch.style.visibility = visible_hidden
}

function visibilityCategories() {
   document.querySelectorAll('.second_category_item').forEach(separate => separate.style.visibility = "hidden")
   document.querySelectorAll('.third_category_item').forEach(separate => separate.style.visibility = "hidden")
   document.querySelectorAll('.fourth_category_item').forEach(separate => separate.style.visibility = "hidden")

   backC.innerHTML = `
   <p class="back-categories">Todas las categorias</p>
   <i class="icon fa-solid fa-check"></i>`
}

deleteSearch.addEventListener('click', () => {
   input.value = ""
   serchContainer.innerHTML = ``
   deleteSearchSH(0, "hidden")
   backC.style.visibility = "visible"
   mainC.style.visibility = "visible"

   visibilityCategories()
})

input.addEventListener("keyup", (e) => {
   serchContainer.innerHTML = ``
   let teclas = e.target.value.toLowerCase()
   e.preventDefault()

   fetch('searchData.json')
      .then(res => res.json())
      .then(data => {
         if (e.target.value != 0) {
            mainC.style.visibility = "hidden"
            backC.style.visibility = "hidden"
            deleteSearchSH(1, "visible")
            visibilityCategories()

            let filter = data.filter(data => {
               let newData = data.toLowerCase()
               return newData.includes(teclas)
            })

            filter.forEach(filter => {
               const serchItem = document.createElement('P')
               serchItem.classList.add('serch_iten')
               serchItem.textContent = filter

               serchContainer.appendChild(serchItem)
            })
            if (input.value != 0 && serchContainer.innerHTML == ``) {
               
               const serchItem = document.createElement('P')
               serchItem.setAttribute('class', "serch_iten category_not_exist")
               serchItem.textContent = "No tenemos una categoría con ese nombre"

               serchContainer.appendChild(serchItem)
            }
         } else {
            deleteSearchSH(0, "hidden")
            mainC.style.visibility = "visible"
            backC.style.visibility = "visible"
         }
      })
})