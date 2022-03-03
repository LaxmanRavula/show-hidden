import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {content: false, display: false}

  firstName = () => {
    this.setState(prevState => ({content: !prevState.content}))
  }

  secondName = () => {
    this.setState(prevState => ({display: !prevState.display}))
  }

  render() {
    const {content, display} = this.state
    const container = content ? (
      <div className="card">
        <p className="headingNew">Joe</p>
      </div>
    ) : null
    const secondContainer = display ? (
      <div className="card">
        <p className="headingNew">Jonas</p>
      </div>
    ) : null

    return (
      <div className="main">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div className="first">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {container}
          </div>
          <div className="second">
            <button className="button" type="button" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            {secondContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
