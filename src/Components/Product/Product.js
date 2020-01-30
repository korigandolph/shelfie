import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Product extends Component {


  getInventory=()=>{
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
      console.log(this.props)
        return(
            <div className = 'product'>
        <img src={this.props.product.image} alt='url'/>
        <div>
        <div>
          <div>Name: {this.props.product.name}</div>
          <div>Price: ${this.props.product.price}</div>
        </div>
        <div>
        <button onClick={()=> this.productEdit(this.props.product.id)}>Edit</button>
        <button onClick={() => this.deleteProduct(this.props.product.id)}
        >Delete</button>
        </div>
      </div>
            </div>
        )
    }
}

export default withRouter(Product);