//1st method to add and delete todo list
//

let hideBtn = document.querySelector(".hideBtn");
let inputField = document.getElementsByClassName("inputField")[0];
let flag = 0;
hideBtn.addEventListener("click", () => {
    if (flag == 1) {
        inputField.style.display = "block";
        hideBtn.classList.remove('up');
        flag--;
      } else {
        inputField.style.display = "none";
        hideBtn.classList.add('up');
        flag++;
    }
});

inputField.children[1].addEventListener("click", addList);
let str = "";

function addList() {

    let inputValue = document.querySelector("input");
    let list = document.getElementsByClassName("list")[0];

    str = ` <li class="content">
          <i class="fas fa-trash icon"></i>
            <span class="text">${inputValue.value}</span>
       </li>
    `;
    inputValue.value = '';
    list.innerHTML += str;
    deleteList();
    
}



function deleteList() {
    // console.log('how you work');
    let content = document.getElementsByClassName('content');

    Array.from(content).forEach( (elem) => {

        elem.children[0].addEventListener('click',() => {
            elem.remove();
        });
        console.log(elem.children[0].getAttribute('onClick'));
    })
}


// 2nd method to add and delete todo list
/*
let hide = document.getElementsByClassName("hideBtn")[0];
hide.addEventListener("click", () => {
  let inputField = document.getElementsByClassName("inputField")[0];
  // console.log(inputField.className);
  if (inputField.classList[1] == "hide") {
    inputField.classList.remove("hide");
  } else {
    inputField.classList.add("hide");
  }
});

let addBtn = document.getElementById("addBtn");
let str = "";

addBtn.addEventListener("click", () => {
  let list = document.getElementsByClassName("list")[0];
  let inputValue = document.querySelector("input");
  str = `<li class="content">
                 <i class= "fas fa-trash icon"></i>
                 <span class="text">${inputValue.value}</span>
           </li>
           `;
  inputValue.value = '';

  list.innerHTML += str;
  let deleteBtn = document.getElementsByClassName("icon");

  Array.from(deleteBtn).forEach((elem, index) => {
    
    elem.addEventListener("click", () => {
        elem.parentElement.remove();
    });
  });
});
*/










