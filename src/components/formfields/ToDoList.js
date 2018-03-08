
import React, { Component } from 'react';
import './formfields.css';


class ToDoList extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(todoItem => {
              return (
                <li key={todoItem.id} onClick={() => this.props.updateTodo(todoItem)}>
                  <input type="checkbox" defaultChecked={todoItem.status} />
                  <span className={todoItem.status ? "true" : ""} > {todoItem.text} </span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default ToDoList;
