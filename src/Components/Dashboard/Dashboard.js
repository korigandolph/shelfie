import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <div>Dashboard</div>
                {this.props.inventory.map((element,i) => (
                  <div><Product 
                  id={element.id}
                  index={i}
                  key={element.id}
                //   deleteFn={this.delete} 
                  inventory={this.props.inventory[i]}
                //   select={this.props.select/Fn}
                  /></div>
                  )
                  )
                }  
                
            </div>
        )
    }
}

export default Dashboard;