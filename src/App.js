import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory =()=>{
    axios.get('/api/inventory').then(res =>{
      this.setState({inventory: res.data})
    })
  }
  
  render(){
    return (
    <div className="App">
      <Dashboard
        inventory= {this.state.inventory}
      />
      <Form/>
      <Header/>
    </div>
  )};
}

export default App;
