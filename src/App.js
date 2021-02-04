import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
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

  handleIncrement = counter => {
      const newCounters = [...this.state.counters]; //using the spread operator to clone the existing counters arrray
      const index = newCounters.indexOf(counter); //getting the index of the counter object passed in
      newCounters[index] = {...counter}; //need to modify
      newCounters[index].value++;
      this.setState({counters:newCounters});
  }

  handleDecrement = counter => {
      const newCounters = [...this.state.counters];
      const index = newCounters.indexOf(counter);
      newCounters[index] = {...counter};
      newCounters[index].value--;
      this.setState({counters:newCounters});
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
   return (
    <div>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length }/>
        <main className="container">
          <Counters 
            counters = {this.state.counters}
            onReset={this.handleReset} 
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} />
        </main>
    </div>
  );
}
 
}

export default App;

