// Desenvolvido por Rodrigo Barreto
import Button from './components/buttons/digits';
import React from 'react';
import Display from './components/display/display';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.number = this.number.bind(this);
    this.clear = this.clear.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.count = this.count.bind(this)

  }
  state = {
    result: ''
  }
  number(x) {
    this.setState({ result: this.state.result + x })
  }
  clear() {
    this.setState({ result: '' })
  }
  deleteOne() {
    try {
      this.setState({ result: this.state.result.substr(0, this.state.result.length - 1) })
    } catch (error) {
      this.clear()
    }
  }
  count() {
    try {
      this.setState({ result: eval(this.state.result) });
    }
    catch (_) {
      this.setState({ result: 'Error' })
    }

  }

  elements = {
    caracteres: ['', '-', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', '0', '.', ''],
  }

  render() {
    const { result } = this.state

    return <>
      <div className='container'>
        
        <Display result={result} />
        <Button
          count={this.count}
          deleteOne={this.deleteOne}
          clear={this.clear}
          functionNumber={this.number}
          elements={this.elements}
        />
      </div>



    </>


  }

}

export default App;
