// TaskFlow Version 2

const app = {

    version: "2.0",

    user: "Ben",

    todos: {

        Ben: [],

        Partner: []

    }

};

function saveData(){

    localStorage.setItem(
        "taskflow",
        JSON.stringify(app)
    );

}

function loadData(){

    const data =
    localStorage.getItem("taskflow");

    if(data){

        Object.assign(
            app,
            JSON.parse(data)
        );

    }

}

function switchUser(user){

    app.user=user;

    saveData();

}

function addTodo(text){

    app.todos[app.user].push({

        id:Date.now(),

        title:text,

        done:false,

        priority:"normal",

        date:null,

        category:"Privat"

    });

    saveData();

}

function deleteTodo(id){

    app.todos[app.user]=

    app.todos[app.user].filter(

    t=>t.id!==id

    );

    saveData();

}

function toggleTodo(id){

    const todo=

    app.todos[app.user]

    .find(t=>t.id===id);

    if(todo){

        todo.done=!todo.done;

    }

    saveData();

}

loadData();

console.log("TaskFlow gestartet");
