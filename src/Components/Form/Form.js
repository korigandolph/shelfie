import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            id: 0,
            name: '',
            price: 0,
            imgurl: '',
            edit: false
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
        if (this.props.match.params.id) {
            axios.get(`/api/productOne/${this.props.match.params.id}`)
            .then(res=> {
                const {name, price, imgurl} = res.data 
                this.setState({name: name, price: price, imgurl: imgurl, edit: true, id: this.props.match.params.id})
            })
        }
            
    }

    handleChange({name, value}){
        this.setState({[name]: value})
    }

    reset = () =>{
        this.props.history.push('/')
        this.setState ({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    addProduct= () => {
        const {name, price, imgurl} = this.state
        axios.post('/api/product', {name, price, imgurl})
        .then(results => {
         this.reset()
            this.props.history.push('/')
    }).catch(err => console.log(err))
  }

  updateProduct(){
    const {id, name, price, imgurl} = this.state
    axios.put(`/api/product/${id}`, {name, price, imgurl}).then(results => {
      this.reset()
      this.props.history.push('/')
    }).catch(err => console.log(err))
  }

    render(){
        return(
            <div>
        <h1>Image Url:</h1> 
        <input
          name='imgurl'
          value={this.state.imgurl}
          placeholder='image'
          onChange={(e) => this.handleChange(e.target)}
        />
        <h1>Name:</h1>
        <input
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={(e) => this.handleChange(e.target)}
        />
        <h1>Price: </h1>
        <input
          name='price'
          value={this.state.price}
          onChange={(e) => this.handleChange(e.target)}
        />
        <button onClick = {() => {
            this.reset()}}
        >Cancel</button>
        {this.state.edit ?
        <button onClick = {() => this.updateProduct()}>Save</button> :
        <button onClick = {() => this.addProduct()}>Add to Inventory</button>
        }
            </div>
        )
    }
}

export default Form;