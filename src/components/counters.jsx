import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        const {counters, onDelete, onDecrement, onIncrement, onReset} = this.props;  //use object destructuring here to grab the things from props that we need 
        return ( 
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            { this.props.counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete}
                    onDecrement={this.props.onDecrement}
                    onIncrement={onIncrement}
                    counter={counter}
                 />
            ))}
        </div> );
    }
}
 
export default Counters;