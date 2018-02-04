import React from 'react';
import DataApi from '../dataApi';
import { data } from '../__tests__/testData';

const api = DataApi(data);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    render(){
        return (
            <div>sss....asdsd.</div>
        ); 
    }
}

export default App;