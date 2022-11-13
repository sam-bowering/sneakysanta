import React from 'react'

class Name extends React.Component {
  componentDidMount() {
    // input name -> split into letters
    // -> assign name a number -> turn letters into respective number
    // -> add number to each "letter" -> turn numbers back into letters
    // -> return scrambled name

    // ***

    // assign number 
    const scrambleNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    this.setState({ scrambleNum })

    // letters to numbers
    const lettersToNum = (letter) => {
      return parseInt(letter, 36) - 9
    }
    
    // testing splitting and converting to numbers in one
    let scrambledName = this.props.name.split('').map(lettersToNum)

    // add scramble number to number form of name
    scrambledName = scrambledName.map(number => number += scrambleNum)

    // convert back into letters
    scrambledName = scrambledName.map(number => String.fromCharCode(number + 64))

    this.setState({ scrambledName })
    // ***

    // scrambledName = scrambledName.map(letter =>
    //   letter = 'x')
    // this.setState({ scrambledName: scrambledName})
  }

  state = {
    isScrambledVisible: false,
    scrambledName: '',
    scrambleNum: 0
  }

  handleClick = () => {
    if (this.state.isScrambledVisible == false) {
      this.setState({ isScrambledVisible: true })
    } else {
      this.setState({ isScrambledVisible: false })
    }
  }

  render () {
    return (
      <div className='list-container'>
        <div className='clean-name' onClick={this.handleClick}>{this.props.name}</div>
        {this.state.isScrambledVisible &&
          <div className='scrambled-name-container'>
            <div className='scrambled-name'>{this.state.scrambledName}</div>
            <p></p>
          </div>
        }
      </div>
    )
  }
}

export default Name