import React from 'react'

import { Form, Button } from 'semantic-ui-react'

class Calculator extends React.Component {
  state = {
    names: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmitName = (state) => {
    // store, set, apply
    const { names, inputName } = state
    const updatedNames = [...names]
    updatedNames.push(inputName)
    this.setState({ names: updatedNames})
  }

  render () {
    return (
      <div className='calculator'>
        <Form>
          <Form.Input name='inputName' value={this.state.submittedname} onChange={this.handleChange}></Form.Input>
          <Button type='button' onClick={() => this.handleSubmitName(this.state)}>Add</Button>
        </Form>
      </div>
    )
  }
}

export default Calculator