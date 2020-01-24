import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            price: 0,
            imgurl: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    reset = () =>{
        this.setState ({
            name: '',
            price: 0,
            imgURL: ''
        })
    }

    render(){
        return(
            <div>Form
                <input name='name' value= {this.state.name} onChange={e => this.handleChange(e)}/>
                <input name='price' value= {this.state.price} onChange={e => this.handleChange(e)}/>
                <input name='imgurl' value= {this.state.imgurl} onChange={e => this.handleChange(e)}/>
                <button onClick={()=> this.reset()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;