window.addEventListener('load' , function(){

let todoInp = document.querySelector('.todo-inp');
let btnAdd = document.querySelector('.todo-btn')
let itemes = document.querySelector('ul')

  
btnAdd.addEventListener('click' , function(e){
    e.preventDefault()
    let todoValue = todoInp.value;

    let item = document.createElement('li');
    item.classList.add('list-group-item');

    let text = document.createElement('p'); 
      text.innerHTML = todoValue;
      item.appendChild(text);
    let box = document.createElement('div')
    box.classList.add('btn-box');

  let check = document.createElement('div');
  check.classList.add('check')
   check.innerHTML = `<i class="fa-solid fa-check"></i>`
    box.appendChild(check); 

    let itemBtn = document.createElement('button')
    itemBtn.classList.add('item-btn')
    itemBtn.innerHTML = 'x'
    box.appendChild(itemBtn);
    
    item.appendChild(box);

  

    if(todoInp.value == ''){
    todoInp.classList.add('activ')
    alert('Todo Listni Qiymat Keriting');
    }
    else{
        itemes.appendChild(item);
        todoInp.value = ''
    }
/* ====Item remove qilish====== */
    itemBtn.addEventListener('click', function(){
    item.remove()
})
/* ====Item remove qilish end====== */

/* ====Itemni belgilash===== */
let checks = document.querySelectorAll('.check');
let items = document.querySelectorAll('li');
for(let i = 0; i < checks.length; i++){
checks[i].addEventListener('click' , function(){
    items[i].style.opacity = 0.7;
})
}

})




/* ==== Search bolimni qilamiz ====== */

let search = document.querySelector('#search');
search.addEventListener('input' , function(){
let list = document.querySelectorAll('p');

let items = document.querySelectorAll('li');
for(let i = 0; i < list.length; i++){
let listValue = list[i].innerHTML;
let searchValue = search.value;
if(listValue.indexOf(searchValue) == -1){
items[i].classList.add('activli')

}
else{
    items[i].classList.remove('activli')
}
}

})

/* =======search end ))))===== */




})