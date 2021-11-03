import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    
    //display the student list after 3 seconds
    setTimeout(()=> {
      this.setState({
      arr: studentList
    })}, 3000)
  }

  //random button handler
  randomize = () => {
    // let newArr =[];
    //shuffle the array and set the state
    for(let i=0;i<this.state.arr.length; i++) {
      // newArr.push(this.state.arr[Math.floor(Math.random() * this.state.arr.length)])
      let j = Math.floor(Math.random() * i+1);
      let tmp = this.state.arr[i];
      this.state.arr[i] = this.state.arr[j]
      this.state.arr[j] = tmp
    }
    this.setState({
      arr: this.state.arr
    })
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */
            this.state.arr.map((student,index)=>(
              <li key={this.state.index}>
                {student}
              </li>
            ))
            }
            
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}