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
    arr: studentList,
    index:0
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
      
    this.setState({
      listText: this.state.arr[this.state.index]
    })

    const makeArr= this.state.arr.map((text,index)=>{
      return (
        <li key={index}>
          {this.state.text}
        </li>
      )
    })
        
      }
    

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */
              this.makeArr
            }
          </ul>
        </div>
        <button className='btn large'>Randomize</button>
      </>
    )
  }
}
