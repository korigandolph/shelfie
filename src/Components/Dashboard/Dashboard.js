import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get('/api/inventory')
    .then(results=> {
      this.setState({inventory: results.data})
    }).catch(err=>console.log(err))
  }

  deleteProduct =(id)=>{
    axios.delete (`/api/product/${id}`).then(results=> {
      this.props.getInventory()
      this.setState({inventory: results.data})
    }).catch(err=>console.log(err))
  }

  productEdit=(id)=>{
    this.props.history.push(`/form/${id}`)
  }

    render(){
        return(
            <div>
                
            <button onClick={() => this.props.history.push('/form')}>New Product</button>
      {this.state.inventory.map(element => (
      <Product 
      productEdit = {this.productEdit} 
      key={element.id} product={element} 
      deleteProduct={this.deleteProduct} />
      ))
    }
            </div>
        )
    }
}

export default Dashboard;