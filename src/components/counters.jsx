import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    //adding an array of counters to the state and adding them to the div with .map method
    state = {  
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    }
    //passing in a counterId so we know which counter object to delete
    handleDelete = (counterId) => {
       // console.log('event handler called ', counterId); //log things in the console to make sure its working as expected
       //filter out the id of the counter that was clicked on
       const remainingCounters = this.state.counters.filter(c => c.id !== counterId);
       //set the state of the counters array to the new array
       this.setState({counters : remainingCounters});
    }

    //pass in new array of counters here to reset back to the beginning
    handleReset = () => {
        const resetCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: resetCounters });
    }

    render() { 
     //instead of having a separate property for everything in the counter object, you can just set a counter={counter} to pass all values to the parent
        return ( 
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            { this.state.counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    counter={counter}
                 />
            ))}
        </div> );
    }
}
 
export default Counters;