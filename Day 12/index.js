const inputBox =document.querySelector('.inputfield input'); 
const addBtn= document.querySelector('.inputfield button');
const todoList = document.querySelector('.todolist');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = () =>{
    let userData = inputBox.value;
    if(userData.trim()!= 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = () =>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pending = document.querySelector(".pendingTasks");
    pending.textContent = listArr.length;

    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }
    else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})" ><i class="fa fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();

}
