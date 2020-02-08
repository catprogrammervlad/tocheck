import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>
        My name is {this.props.name} and my age is {this.props.age}
      </div>
    );
  }
}

export default Person;
