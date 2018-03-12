import React from 'react'
import { render } from 'react-dom'
import UserList from './UserList'
import UserForm from './UserForm'

class App extends React.Component {
  render () {
    return (
      <div>
        <UserList />
        <UserForm />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
