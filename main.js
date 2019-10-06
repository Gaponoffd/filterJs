

let select = document.querySelector('.select');
let tableDates = document.querySelectorAll('.table-date');
let optionsList = document.querySelector('.options__list');

select.addEventListener('click', function(){
  this.classList.toggle('open');
})

createOptionsItem()

optionsList.addEventListener('click', function(event){
    
  let target = event.target;

  if(target.classList.contains('options__item')){

    let optionItemText = target.innerHTML;

    fiterElement(document.querySelectorAll('[data-year]'), optionItemText)

  }

})

function createOptionsItem(){

  let yearsArr = new Set();

  for(let i = 0; i < tableDates.length; i++){
    let yearTable = tableDates[i].innerHTML.slice(-4);

    yearsArr.add(yearTable);
 
    tableDates[i].closest('.item-table').setAttribute('data-year', yearTable)
  }

  for(let yearsOptions of yearsArr){

    let optionsItem = document.createElement('li');
    optionsItem.classList = 'options__item';
    optionsItem.innerHTML = yearsOptions;
    optionsList.append(optionsItem);
    
  }

}

function fiterElement(elements, value){

  for(let j = 0; j < elements.length; j++){

    let dataYear =  elements[j].getAttribute('data-year');

    if(value == "все"){

      elements[j].style.display = "flex";

    }else if(dataYear != value){

      elements[j].style.display = "none";

    } else {

      elements[j].style.display = "flex";

    }

  }

}


