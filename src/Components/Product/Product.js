import React, {Component} from 'react';
// import axios from 'axios';

class Product extends Component {
    render(){
        return(
            <div>
        <img src={this.props.imgurl} alt='url'/>
        <div>
        <div>
          <div>Name: {this.props.name}</div>
          <div>Price: ${this.props.price}</div>
        </div>
        <div>
        <button>Edit</button>
        <button
          onClick={() => this.props.deleteProduct(this.props.id)}
        >Delete</button>
        </div>
      </div>
            </div>
        )
    }
}

export default Product;