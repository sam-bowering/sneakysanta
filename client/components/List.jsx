import React from 'react'

import Name from './Name'

class List extends React.Component {
  render () {
    return(
      <ul className='list'>
        {this.props.names.map(name =>
          <Name name={name}/>
        )}
      </ul>
    )
  }
}

export default List