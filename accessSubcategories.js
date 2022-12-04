const body = document.querySelector('body')
const containerBack = document.querySelector('.container-back')

const mainCategoryVisibility = document.querySelector('.main_category')
const secondCategoryVisibility = document.querySelector('.second_category')
const thirdCategoryVisibility = document.querySelector('.third_category')
const fourthCategoryVisibility = document.querySelector('.fourth_category')

listeners()
function listeners() {
   body.addEventListener('click', click)
}

function backCategories(clas, text) {
   containerBack.innerHTML = `
   <i class="icon fa-solid fa-angle-down letf"></i>
   <p class="back-${clas}">${text}</p>`
}

function click(e) {
   fetch('data.json')
      .then(res => res.json())
      .then(data => {
         const getCategories = data.categories
         getCategories.forEach(secondData => {
            // show and back (secondCategory)
            let nameSecond = secondData.name.replace(/ /g, '')
            if (e.target.classList.contains(nameSecond)) {
               document.querySelector(`.${nameSecond.toUpperCase()}`).style.visibility = "visible"
               mainCategoryVisibility.style.visibility = "hidden"
               backCategories("categories", "Todas las categorias")
            }
            if (e.target.classList.contains('back-categories')) {
               mainCategoryVisibility.style.visibility = "visible"

               let container = document.querySelectorAll('.second_category_item')
               container.forEach(classC => classC.style.visibility = "hidden")

               containerBack.innerHTML = `
                  <p class="back-categories">Todas las categorias</p>
                  <i class="icon fa-solid fa-check"></i>`
            }


            // show and back (thirdCategory)
            let getThirdCategory = secondData.categories
            getThirdCategory.forEach(thirdData => {
               let nameThird = thirdData.name.replace(/ /g, '')

               let classSecondCategoryContainer = []
               if (e.target.classList.contains(nameThird)) {
                  document.querySelector(`.${nameThird.toUpperCase()}`).style.visibility = "visible"

                  document.querySelector(`.${nameSecond.toUpperCase()}`).style.visibility = "hidden"
                  backCategories("subcategories", secondData.name)

                  return parent = e.target.parentElement.parentElement.className.split(" ", 4)
               }

               if (e.target.classList.contains('back-subcategories')) {
                  let getClass = [...classSecondCategoryContainer, parent]
                  document.querySelector(`.${getClass[0][1]}`).style.visibility = "visible"

                  document.querySelectorAll('.third_category_item').forEach(classC => classC.style.visibility = "hidden")

                  backCategories("categories", "Todas las categorias")
               }


               // show and back (fourthCategory)
               let key = 'categories';
               let hasKey = Object.prototype.hasOwnProperty.call(thirdData, key)

               if (hasKey) {
                  let getFourthCategory = thirdData.categories
                  getFourthCategory.forEach(fourthData => {
                     let hasKey = Object.prototype.hasOwnProperty.call(fourthData, key)
                     if (hasKey) {
                        let nameFourth = fourthData.name.replace(/ /g, '')

                        let classThirdCategoryContainer = []
                        if (e.target.classList.contains(nameFourth)) {
                           document.querySelector(`.${nameFourth.toUpperCase()}`).style.visibility = "visible"

                           document.querySelector(`.${nameThird.toUpperCase()}`).style.visibility = "hidden"
                           backCategories("subSubcategories", thirdData.name)

                           return newParent = e.target.parentElement.parentElement.className.split(" ", 4)
                        }

                        if (e.target.classList.contains('back-subSubcategories')) {
                           let getClass = [...classThirdCategoryContainer, newParent]
                           document.querySelector(`.${getClass[0][1]}`).style.visibility = "visible"

                           document.querySelectorAll('.fourth_category_item').forEach(classC => classC.style.visibility = "hidden")

                           backCategories("subcategories", "Categoria anterior")
                        }
                     }
                  })
               }
            })
         })
      })
}


