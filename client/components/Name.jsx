import React from 'react'

class Name extends React.Component {
  state = {
    isScrambledVisible: false
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
            <div className='scrambled-name'>{this.props.name}</div>
            <p></p>
          </div>
        }
      </div>
    )
  }
}

export default Name