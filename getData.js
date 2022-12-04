const mainCategory = document.querySelector('.main_category');
const secondCategory = document.querySelector('.second_category');
const thirdCategory = document.querySelector('.third_category');
const fourthCategory = document.querySelector('.fourth_category');


fetch('data.json')
   .then(res => res.json())
   .then(data => {
      const getCategories = data.categories

      for (let i = 0; i < getCategories.length; i++) {
         // mainCategory
         const mainCategoryItem = document.createElement('DIV')
         mainCategoryItem.classList.add('main_category_item')
         mainCategoryItem.innerHTML = `
            <div class="icon_text_container">
               <i class="${getCategories[i].icon}"></i>
               <p class="item_text">${getCategories[i].name}</p>
            </div>
            <i class="icon fas fa-angle-down right ${getCategories[i].name.replace(/ /g, '')}"></i>`
         mainCategory.appendChild(mainCategoryItem)


         // secondCategory
         let classItemsecond = getCategories[i].name.toUpperCase().replace(/ /g, '')
         const secondCategoryItem = document.createElement('DIV')
         secondCategoryItem.setAttribute('class', `second_category_item ${classItemsecond}`)
         secondCategory.appendChild(secondCategoryItem)

         let getSecondCategory = getCategories[i].categories
         let arraySecondCategory = Object.values(getSecondCategory)

         arraySecondCategory.forEach(filtrar => {
            let key = 'categories';
            let hasKey = Object.prototype.hasOwnProperty.call(filtrar, key)

            if (hasKey) {
               let accessSubcategoryItem = document.createElement('DIV')
               accessSubcategoryItem.classList.add('access_subcategory_item')
               accessSubcategoryItem.innerHTML = `
                  <p class="item_text">${filtrar.name}</p>
                  <i class="icon fas fa-angle-down right ${filtrar.name.replace(/ /g, '')}"></i>`
               secondCategoryItem.appendChild(accessSubcategoryItem)


               // thirdCategory
               let classItemThird = filtrar.name.toUpperCase().replace(/ /g, '')
               let thirdCategoryItem = document.createElement('DIV')
               thirdCategoryItem.setAttribute('class', `third_category_item ${classItemThird}`)
               thirdCategory.appendChild(thirdCategoryItem)

               let getThirdCategory = filtrar.categories
               let arrayThirdCategory = Object.values(getThirdCategory)

               arrayThirdCategory.forEach(filtrar => {
                  let key = 'categories';
                  let hasKey = Object.prototype.hasOwnProperty.call(filtrar, key)
                  if (hasKey) {
                     let accessSubcategoryItem = document.createElement('DIV')
                     accessSubcategoryItem.classList.add('access_subcategory_item')
                     accessSubcategoryItem.innerHTML = `
                        <p class="item_text">${filtrar.name}</p>
                        <i class="icon fas fa-angle-down right ${filtrar.name.replace(/ /g, '')}"></i>`
                     thirdCategoryItem.appendChild(accessSubcategoryItem)


                     // fourthCategory
                     let classItemFourth = filtrar.name.toUpperCase().replace(/ /g, '')
                     let fourthCategoryItem = document.createElement('DIV')
                     fourthCategoryItem.setAttribute('class', `fourth_category_item ${classItemFourth}`)
                     fourthCategory.appendChild(fourthCategoryItem)

                     let getFourthCategory = filtrar.categories
                     let arrayThirdCategory = Object.values(getFourthCategory)

                     arrayThirdCategory.forEach(filtrar => {
                        let subcategoryItem = document.createElement('p')
                        subcategoryItem.classList.add('subcategory_item')
                        subcategoryItem.textContent = filtrar.name
                        fourthCategoryItem.appendChild(subcategoryItem)
                     })
                  } else {
                     let subcategoryItem = document.createElement('p')
                     subcategoryItem.classList.add('subcategory_item')
                     subcategoryItem.textContent = filtrar.name
                     thirdCategoryItem.appendChild(subcategoryItem)
                  }
               })
            } else {
               let subcategoryItem = document.createElement('p')
               subcategoryItem.classList.add('subcategory_item')
               subcategoryItem.textContent = filtrar.name
               secondCategoryItem.appendChild(subcategoryItem)
            }
         })
      }
   })