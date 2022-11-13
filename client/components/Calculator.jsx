import React from 'react'

import { Form, Button } from 'semantic-ui-react'

import List from './List'

class Calculator extends React.Component {
  state = {
    names: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmitName = () => {
    const names = this.state.names
    names.push(this.state.inputName)
    this.setState({ names, inputName: '' })
  }

  handleEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      // FIGURE OUT HOW TO NOT REPEAT CODE
      // vvv Same function as handleSubmitName vvv
      const names = this.state.names
      names.push(this.state.inputName)
      this.setState({ names, inputName: '' })
    }
  }

  handleReset = () => {
    this.setState({ names: [] })
  }

  render () {
    return (
      <div className='calculator'>
        <Form>
          <Form.Input name='inputName' value={this.state.inputName} onChange={this.handleChange} onKeyDown={this.handleEnterSubmit}></Form.Input>
          <Button type='button' onClick={this.handleSubmitName}>Add</Button>
          <Button type='button' onClick={this.handleReset}>Reset</Button>
        </Form>
        <List names={ this.state.names }/>
      </div>
    )
  }
}

export default Calculator