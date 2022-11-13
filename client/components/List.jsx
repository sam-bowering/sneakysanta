import React from 'react'

import Name from './Name'

class List extends React.Component {
  componentDidMount() {
    this.setState({
      names: this.props.names
    })
  }

  state = {
    names: ['Sam', 'Jack', 'Kai']
  }

  render () {
    return(
      <ul className='list'>
        {this.state.names.map(name =>
          <Name name={name}/>
        )}
      </ul>
    )
  }
}

export default List