import React, {Component} from 'react';

class Product extends Component {
    render(){
        return(
            <div>
                <div>Product</div>
                <h1>{this.props.inventory.name}</h1>
                <h1>{this.props.inventory.price}</h1>
                <img src = {this.props.inventory.imgurl} alt='img' />
            </div>
        )
    }
}

export default Product;