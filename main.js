

let select = document.querySelector('.select');
let tableDates = document.querySelectorAll('.table-date');
let optionsList = document.querySelector('.options__list');

select.addEventListener('click', function(){
  this.classList.toggle('open');
})

createOptionsItem()

function createOptionsItem(){

  let yearsArr = new Set();

  for(let i = 0; i < tableDates.length; i++){
    let yearTable = tableDates[i].innerHTML.slice(-4);

    yearsArr.add(yearTable)
  }

  for(let yearsOptions of yearsArr){

    let optionsItem = document.createElement('li');
    optionsItem.classList = 'options__item';
    optionsItem.innerHTML = yearsOptions;
    optionsList.append(optionsItem);

    console.log(optionsItem)
  }

}


// let selectList = document.querySelector('.select-list');
// let descItems = document.querySelectorAll('.desc-item');

// selectList.addEventListener('click', function(event){
    
//   let target = event.target;

//   if(target.classList.contains('select-item')){

//     let selectItemText = target.innerHTML;

//     if(selectItemText !== 'все'){
        
//       for(let i = 0; i < descItems.length; i++){

//         let descItemAttr = descItems[i].getAttribute('data-year');    
            
//         if(descItemAttr != selectItemText){
//             descItems[i].style.display = 'none';
//         } else {
//             descItems[i].style.display = 'block';
//         }
          
//       }

//     } else {

//       for(let i = 0; i < descItems.length; i++){
//         descItems[i].style.display = 'block';
//       }
      
//     }

//   }

// })


