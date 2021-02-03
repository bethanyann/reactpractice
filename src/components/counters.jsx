import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
     //Counters is now a Controlled component because it raises the events and then bubbles the event to the parent, which is App
     //Counters has no state and is simply recieving data and methods to interact with that data from it's parent via props
     //All of the events now reference this.props instead of the local state/functions
        return ( 
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            { this.props.counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}
                 />
            ))}
        </div> );
    }
}
 
export default Counters;