let input = document.querySelector('input');
let addBtn = document.querySelector('#addBtn');
let todoList = document.getElementsByClassName('list')[0];
let deleteAllBtn = document.querySelectorAll('.deleteIcon');
let number = document.querySelector('.number');
let clearAll = document.querySelector('.clearAll');


let listArray;

input.addEventListener('keyup', check);

function check() {
    let userEnteredValue = input.value;
    if (userEnteredValue.length != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
}

addBtn.onclick = () => {

    let getLocalStorage = localStorage.getItem('New Todo');
    if (getLocalStorage == null) {
        listArray = [];
    }
    else {
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.push(input.value);
    localStorage.setItem('New Todo', JSON.stringify(listArray));
    showList();
}

showList();
function showList() {
    let getLocalStorage = localStorage.getItem('New Todo');
    if (getLocalStorage == null) {
        listArray = [];
    }
    else {
        listArray = JSON.parse(getLocalStorage);
    }

    // console.log(listArray);

    number.innerText = listArray.length;

    if (listArray.length != 0) {
        clearAll.classList.add('active');
    } else {
        clearAll.classList.remove('active');
    }
    
    let newLi = '';
    listArray.forEach((elem, ind) => {
        newLi += `<li> ${elem}
        <div class="deleteIcon" onclick = 'deleteItems(${ind})'>
        <i class="fas fa-trash"></i>
        </div> </li>`;
    });
    todoList.innerHTML = newLi;
    
    input.value = '';
    check();
}


function deleteItems(elem) {
    let getLocalStorage = localStorage.getItem('New Todo');
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(elem, 1);
    localStorage.setItem('New Todo', JSON.stringify(listArray));
    showList();    
}

clearAll.addEventListener('click', () => {
    localStorage.clear();
    showList();
})
