import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  state = {
    answer: 42
  };
  asyncFunc = () => { return Promise.resolve(37)};
  async componentDidMount(){
    this.setState({answer: await this.asyncFunc()});
  }
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World !! -- {this.state.answer}</h1>
      </div>);
  }
}