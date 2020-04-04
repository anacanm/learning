import React, {Component} from "react";

class AddTodo extends Component{
    state = {
        content:""
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content.length !== 0 || (this.state.content.trim)){
        this.props.addTodo(this.state.content);
        this.setState({
            content:""
        })
    }

    }
        

    render() {
    return (
        <form onSubmit = {this.handleSubmit}>
        <label htmlFor = "name">Add a todo!</label>
            <input type = "text" id = "content" onChange = {this.handleChange} value = {this.state.content}></input>
            <button id = "submit">Submit!</button>
        </form>
    )
}

}

export default AddTodo;