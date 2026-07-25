let currentUser="Ben";

let todos={
Ben:[],
Partner:[]
};

function switchUser(user){

currentUser=user;

document.getElementById("btnBen").classList.remove("active");
document.getElementById("btnPartner").classList.remove("active");

if(user==="Ben"){
document.getElementById("btnBen").classList.add("active");
}else{
document.getElementById("btnPartner").classList.add("active");
}

render();
}

function addTask(){

let input=document.getElementById("taskInput");

if(input.value==="") return;

todos[currentUser].push({
text:input.value,
done:false
});

input.value="";

render();

}

function render(){

let list=document.getElementById("todoList");

list.innerHTML="";

todos[currentUser].forEach((task,index)=>{

let li=document.createElement("li");

let span=document.createElement("span");

span.innerText=task.text;

if(task.done){
span.classList.add("done");
}

span.onclick=function(){

task.done=!task.done;

render();

};

let del=document.createElement("button");

del.innerText="🗑";

del.className="delete";

del.onclick=function(){

todos[currentUser].splice(index,1);

render();

};

li.appendChild(span);

li.appendChild(del);

list.appendChild(li);

});

}
