import React from 'react';
import './App.css';

class Count extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }

  increaseCounter(){
    this.setState({
      count :this.state.count+1
    })
  }

  decreaseCounter(){
    this.setState({
      count :this.state.count-1
    })
  }






  render(){
    return(
      <div className='count-component'>
        <p>count ==>> ({this.state.count}) </p>

        <button className='bu1'
        onClick={()=>{
          this.increaseCounter()
        }}
        >+Increase</button>

<button className='bu2'
        onClick={()=>{
          this.decreaseCounter()
        }}
        >+Decrease</button>
      </div>
    )
  }



}



export default Count;
