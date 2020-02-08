import React, { Component } from 'react';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Dima', age: 24 },
      { name: 'Vlad', age: 45 },
      { name: 'Kostya', age: 42 },
    ],
  };

  changeNameHendler = () => {
    this.setState({
      persons: [
        { name: 'Dima', age: 18 },
        { name: 'Vlad', age: 18 },
        { name: 'Kostya', age: 18 },
      ],
    });
  };

  render() {
    return (
      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <button onClick={this.changeNameHendler}></button>
      </div>
    );
  }
}

export default App;
