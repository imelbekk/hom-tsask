// 1-savol 

let text = document.getElementById('text')
let lists = document.getElementById('lists')

const addLists = () =>{
    console.log(text.value);

    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = "x"
    li.innerHTML = text.value
    lists.appendChild(li)
    li.appendChild(button)
    button.classList.add('delete_btn')
    text.value = ''
    saveData()
}

lists.addEventListener("click", (event) =>{
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove()
        saveData()
    }else if(event.target.tagName === 'LI'){
        event.target.classList.toggle('check')
        saveData()
    }
})

function  saveData(){
    localStorage.setItem('data', lists.innerHTML)
}
function showTask (){
    lists.innerHTML = localStorage.getItem('data')
}

showTask()




// 2-savol

let textarea = document.getElementById('textarea')
let result = document.getElementById('result')

const btn_1 = () =>{
    let arr = textarea.value.split(' ').filter(a => a)
    console.log(arr)
    let len = arr.length
    console.log(len);
    result.innerHTML = len
}

let del = null

const delBtn = () =>{
    textarea.value = ''
}