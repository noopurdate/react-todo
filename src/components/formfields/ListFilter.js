
import React, { Component } from 'react';
import './formfields.css';


class ListFilter extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer className="form-footer">
          <label count={this.props.list.length} />
          <span name={"All"}
            onClick={() => { this.props.updateFilter(null)}} 
          >All</span>
          <span name={"Active"}
            onClick={() => { this.props.updateFilter(false)}}
            >Pending</span>
          <span name={"Completed"}
            onClick={() => { this.props.updateFilter(true)}}
            >Completed</span>
        </footer>
      </div>
    );
  }
}

export default ListFilter;
