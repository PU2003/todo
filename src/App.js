import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">

          <TodoApp/>

      </div>
    );
  }
}

// export function PlayingWithProps(){
    
//    return(
//        <div>Props</div>
//    )
// }

export default App; 