let input = document.querySelector('input');
let suggestBox = document.getElementsByClassName('suggestionBox')[0];
let icon = document.querySelector('.icon');
let link = document.querySelector('a');
let webLink;
input.addEventListener('keyup', () => {
    let userData = input.value;
    let emptyArray;
    if (userData) {
        suggestBox.style.display = 'block';

        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            console.log(webLink);
            link.setAttribute('href', webLink);
            link.click();
        }



        emptyArray = Suggestions.filter((elem) => {
            return elem.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((elem) => {
            return `<li> ${elem} </li>`;
        });
        // console.log(emptyArray);
        showList(emptyArray);

        let allList = suggestBox.querySelectorAll('li');
        // console.log(allList);
        allList.forEach((elem) => {
            // elem.addEventListener('click', () => {
            //     input.value = elem.innerText;
            // })
            elem.setAttribute('onclick', 'select(this)');
        });

    }
    else {
        suggestBox.style.display = 'none';

    }
})

function showList(list) {
    let listData;
    if (list.length) {
        listData = list.join('');
    }
    else {

        listData = `<li> ${input.value} </li>`;
    }

    suggestBox.innerHTML = listData;

}


function select(elem) {
    input.value = elem.innerText;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${elem.innerText}`;
        link.setAttribute('href', webLink);
        link.click();
    }
    suggestBox.style.display = 'none';
}