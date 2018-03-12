import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

const REQUEST_URL = 'http://localhost:3000/users.json'

class UserForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: ''
    }

    this.handleFNChange = this.handleFNChange.bind(this)
    this.handleLNChange = this.handleLNChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFNChange(e) {
    this.setState({ first_name: e.target.value })
  }

  handleLNChange(e) {
    this.setState({ last_name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    var data = { first_name: this.state.first_name, last_name: this.state.last_name }
    axios.post(REQUEST_URL, data)
    .then((results) => {
      alert('yeah')
    })
    .catch((error) => {
      alert('oops')
    })

    this.setState({
      first_name: '',
      last_name: ''
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          First Name:
          <input type="text" value={ this.state.first_name } onChange={ this.handleFNChange } />
        </label>
        <label>
          Last Name:
          <input type="text" value={ this.state.last_name } onChange={ this.handleLNChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default UserForm
