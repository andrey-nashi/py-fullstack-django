import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

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
