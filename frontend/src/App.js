import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'


import PageGenerator from './page/PageGenerator'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <PageGenerator />
        </BrowserRouter>
    );
  }
}

export default App;
