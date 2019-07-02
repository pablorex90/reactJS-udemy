import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const { isActivated,
      arrayOfNumbers,
      multiply,
      text,
      number,
      ObjectWithInfo,
      title,
    } = this.props;

    const textSegunBool = isActivated ? 'Cierto' : 'Falso';
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{textSegunBool}</p>
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{ObjectWithInfo.key}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Vamos a aprender REACT!</h3>
        <p>Hola mundo estoy usando React</p>
        <Hello title='Hello from PROPS3'></Hello>
        {/* <Text number={2} text = 'Texto en String' isActivated= {false} ></Text> */}
        <Text
          arrayOfNumbers={[2, 3, 10]}
          isActivated
          number={2}
          multiply={(number) => number * 3}
          ObjectWithInfo={{ key: 'value', key2: 'otherValue' }}
          text='Texto en String'
          title={<h1>Este es el titulo</h1>}
        ></Text>
        <strong>Esto es strong</strong>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function Hello(props){
//   return <h2>{props.title}</h2>;
// }

// const Hello = (props) => <h2>{props.title}</h2>;

export default App;
