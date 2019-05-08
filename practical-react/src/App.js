import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// {
//   "plugins": [
//     ["@babel/plugin-transform-react-jsx", {"pragme":"preact.h"}]
//   ]
// }

class HelloWorld extends React.Component{
  // name: "Mark";
  render()
  {
    var name = "Mark";
    return (<p1>Hello {name}</p1>);
  }
}

class ShoppingList extends React.Component{
  render()
  {
    return (
      <div className="shopping-list" id="hi">
        <h1> Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>

    );
  }

}

class Square extends React.Component{
  render()
  {
    return(
      <button className="square">
        /*To do*/
      </button>
    );
  }
}//End class Square

class Board extends React.Component{
  renderSquare(i)
  {
    return <Square value={i} />;
  }

  render()
  {
    const status = "Next player: X";
    // for (let index = 0; index < 3; index++)
    // {
    //
    // }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}//end class Board

class Game extends React.Component{
  render()
  {

  }

}

function App() {
  var list = new ShoppingList();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          {/*<br />Oh, and go fuck yourself.*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <HelloWorld name="Mark"/>
      </header>
    </div>
  );

}

export default App;
