const inputBox =document.querySelector(".inputfield input"); 
const addBtn= document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () =>{
    let userDate = inputBox.value;
    console.log(userDate);
    if(userDate.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = ()=>{ 
    let dataIn = inputBox.value; 
    let local = localStorage.getItem("New Todo");
    if(local == null){
      listArray = []; 
    }else{
      listArray = JSON.parse(getLocalStorageData);  
    }
    listArray.push(dataIn); 
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    showTasks(); 
    addBtn.classList.remove("active");
}
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }
    else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index});" ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    console.log(todoList);
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
