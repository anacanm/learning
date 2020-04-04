import React, {Component} from 'react';
import TodoList from "./TodoList.js";
import AddTodo from "./AddTodo.js"
import "./App.css"

class App extends Component{
  state = {
    todos: []
  }

  removeTodo = (id) =>
  {
    let newTodos = this.state.todos.filter(todo => {
      return (todo.id !== id)});

    this.setState({
      todos:newTodos
    });
  }

  addTodo = (content) =>
  {
    let newTodos = this.state.todos;

    //this makes sure that you cannot add pure whitespace as a todo
    let text = content;
    text = text.trim()

    if(text.length!==0)
    {
    let newTodo = {id:Math.random(), content: content}
    newTodos.push(newTodo);
    this.setState({
      todos:newTodos
    })
  }

  }

  render(){
    return (
      <div className="App container">
      <h1 className = "center blue-text">Todos</h1>
      <TodoList todos = {this.state.todos} removeTodo = {this.removeTodo}/>
      <AddTodo addTodo = {this.addTodo}/>
      

        
      </div>
    );
  }
}

export default App;
