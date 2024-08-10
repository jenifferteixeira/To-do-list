const button = document.querySelector('.add-task')
const input = document.querySelector('.task')
const list = document.querySelector('ul')


let myList = []


function addNew() {
    myList.push({
        tarefa: input.value,
        checked: false
    })

    input.value = ''

    showList()
}

function showList() {
    let newLi = ''

    myList.forEach((item, index) => {
        newLi = newLi + `
        <li class="${item.checked && "done"}" >
            <img src="./assets/checked.png" alt="check" onclick="checked(${index})">
            <p>${item.tarefa}</p>
            <img src="./assets/trash.png" alt="lixeira" onclick="deleteItem(${index})">
        </li>
        `
    })

    list.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myList))
}

function checked(index) {
    myList[index].checked = !myList[index].checked
    showList()
}

function deleteItem(index) {
    myList.splice(index, 1)
    showList()
}

function reload(){
    const taskLocalStorage = localStorage.getItem('list')

    if(taskLocalStorage){
        myList = JSON.parse(taskLocalStorage)
    }
    
    showList()
}

reload()
button.addEventListener('click', addNew)