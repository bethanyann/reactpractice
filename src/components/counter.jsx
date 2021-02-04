import React, { Component } from 'react';

class Counter extends Component {  
    componentDidUpdate(previousProps, previousState){
        console.log('previous props', previousProps);
        console.log('previous state', previousState);
    }
    //refactored this to rely entirely on the props
    render() {  
        let classes = this.getBadgeClasses();
      
        return (
        <div className="row">
            <div className="col-1">

            </div>
            <div className="col">
                <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>
                <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0} className="btn btn-secondary btn-sm"> - </button>
                <button onClick={() => this.props.onIncrement(this.props.counter)}  className="btn btn-secondary btn-sm m-2"> + </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
       const {value} = this.props.counter;
       return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;