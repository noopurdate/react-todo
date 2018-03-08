import React, { Component } from 'react';
import './formfields.css';


class Input extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.getElementById("form-input").focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.addTodo(this.state.value);
      this.setState({ value: '' });
    }
    
  }

  render() {
    return (
      <div>
        <input type="text"
          id="form-input"
          name="todoText"
          className="TextBox"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;