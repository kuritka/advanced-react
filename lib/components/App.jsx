import React from 'react';
import ReactDOM from 'react-dom';
import DataApi from 'state-api';
import ArticleList from './ArticleList'
import {data} from '../__tests__/testData';


const api = new DataApi(data);

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
         articles: api.getArticles(),
         authors: api.getAuthors()
      };
   }
  // asyncFunc = () => { return Promise.resolve(37)};
  // async componentDidMount(){
  //   this.setState({answer: await this.asyncFunc()});
  // }
  
  //lookup author - bridge
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId], 
  };


  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>wwws</h1>
        <ArticleList 
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>);
  }
}


// export default class App extends React.Component {
//   state = {
//     answer: 42
//   };
//   asyncFunc = () => { return Promise.resolve(37)};
//   async componentDidMount(){
//     this.setState({answer: await this.asyncFunc()});
//   }
//   render() {
//     return (
//      <div style={{textAlign: 'center'}}>
//         <h1>Hello World !! -- {this.state.answer}</h1>
//       </div>);
//   }
// }