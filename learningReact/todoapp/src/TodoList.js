import React, {Component} from "react";

const TodoList = ({todos, removeTodo}) => {
    
    if(!todos.length){
        return (
            <p className = "center">You have no todos!</p>
        );
    }


    let todoList = todos.map(todo =>
        {
            return (
            <div className = "collection-item" key = {todo.id}>
                <span id = "todoItem" onClick = {() => removeTodo(todo.id)}>{todo.content}</span>
            </div>)
        }

    )
    return (
        <div className = "todoList collection">{todoList}</div>
    )

}

export default TodoList;