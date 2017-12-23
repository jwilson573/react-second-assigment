import React, { Component } from 'react';
import Validation from './ValidationComponent/Validation';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    comment: ""
  }

  commentChangeHandler = (event) => {
    const comment = event.target.value;   
    this.setState({comment: comment});
  }
  characterDeleteHandler = (charIndex) => {
    const comment = this.state.comment.split('');
    // The below syntax seemed to work as well, however since they recommended using split I figured I'd keep that as the active code.
    // const comment = [...this.state.comment];
    comment.splice(charIndex, 1);
    this.setState({comment: comment.join('')});
  }

  render() {
    let arr = [...this.state.comment];
    console.log(arr);
    let charComponent = (
        arr.map((char, idx) => {
          return (
            <div className="charStyle" key={idx}>
              <CharComponent character={char} click={() => this.characterDeleteHandler(idx)}/>
            </div>
          )
        })
      

    )




    return (
      <div className="App">
        <label htmlFor="comment">Please input a comment: </label>
        <input type="text" onChange={this.commentChangeHandler} value={this.state.comment} id="comment" />
        <p>Your Comment: {this.state.comment}</p>
        <p>Comment Length: {this.state.comment.length} </p>
        <Validation commentLength={this.state.comment.length}/>
        {charComponent}
      </div>
    );
  }
}

export default App;
