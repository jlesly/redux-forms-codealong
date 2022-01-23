import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <form>
          <input type="text" placeholder="add todo" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
