import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header/Header';
// import axios from 'axios';
import './App.css';

class App extends Component {
  render(){
    return(
    <HashRouter>
    <div>
      <Header />
      {routes}
    </div>
  </HashRouter>
)
}
}

export default App;
