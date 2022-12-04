const contentMenu = document.querySelector('.content_menu')


document.querySelector('.categories').addEventListener("click", () => {
   contentMenu.style.transform = 'scale(1)'
})

document.querySelector('.menu_close').addEventListener("click", () => {
   contentMenu.style.transform = 'scale(0)'

   setTimeout(() => {
      document.querySelector('.container-back').innerHTML = `
         <p class="back-categories">Todas las categorias</p>
         <i class="icon fa-solid fa-check"></i>`

      document.querySelector(".input_search").value= ""
      document.querySelector(".serch_container").innerHTML = ``
      document.querySelector('.container-back').style.visibility = "visible"

      document.querySelectorAll('.second_category_item').forEach(separate => separate.style.visibility = "hidden")
      document.querySelectorAll('.third_category_item').forEach(separate => separate.style.visibility = "hidden")
      document.querySelectorAll('.fourth_category_item').forEach(separate => separate.style.visibility = "hidden")

      document.querySelector('.main_category').style.visibility = "visible"
   }, 1000);
})



