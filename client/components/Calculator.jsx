import React from 'react'

import { Form, Button } from 'semantic-ui-react'

class Calculator extends React.Component {
  state = {
    submittedName: '',
    names: []
  }

  handleInputName = (e) => {
    this.setState({ submittedName: e.target.value})
  }

  render () {
    return (
      <div className='calculator'>
        <Form>
          <Form.Input name='submitName' value={this.state.submittedname} onChange={this.handleInputName}></Form.Input>
        </Form>
      </div>
    )
  }
}

export default Calculator