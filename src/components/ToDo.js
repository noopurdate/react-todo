import React, { Component } from 'react';
import Input from './formfields/Input';
import ToDoList from './formfields/ToDoList'
import ListFilter from './formfields/ListFilter'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.updateListFilter = this.updateListFilter.bind(this);
        this.state = {
            todoList: [],
            selectedFilter: null,
            filteredList: []
        }
    }

    addTodo(todoText) {
        var todoItem = {
            text: todoText,
            id: this.state.todoList.length,
            status: false
        };
        this.state.todoList.push(todoItem);
        this.updateFilteredList(this.state.todoList);
    }

    updateListFilter(filter) {

        this.setState({
            selectedFilter: filter
        }, () => {
            this.updateFilteredList(this.state.todoList);
        });
    } 

    updateTodoStatus(updatedTodoItem) {

        var updatedTodoList = this.state.todoList.map(todoItem => {
            if(todoItem.id === updatedTodoItem.id) {
                todoItem.status = true;
            }
            return todoItem;
        });

        this.updateFilteredList(updatedTodoList);
    }
    updateFilteredList(updatedTodoList) {
        var updatedFilteredList = [];

        if (this.state.selectedFilter === null) {
            updatedFilteredList = updatedTodoList;
        } else {
            updatedFilteredList = updatedTodoList.filter(item => {
                if (item.status === this.state.selectedFilter) {
                    return item;
                }
            });
        }
        this.setState({
            todoItemList: updatedTodoList,
            filteredList: updatedFilteredList
        });

    }

    render() {
        return (
            <div>
                <label>
                    <Input placeholder="Add a todo item"
                        addTodo={this.addTodo}
                    />
                </label>
                <ToDoList list={this.state.filteredList} updateTodo={this.updateTodoStatus}/>
                <ListFilter list={this.state.filteredList} updateFilter={this.updateListFilter}/>
            </div>
        );
    }
}
export default ToDo;
