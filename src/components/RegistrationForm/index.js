// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    registrationStatus: false,
    firstName: '',
    lastName: '',
    firstNameReq: '',
    lastNameReq: '',
  }

  registrationPage = () => {
    const {firstName, lastName, lastNameReq, firstNameReq} = this.state
    const firstBgColor = firstNameReq ? 'bg-color' : 'bg-white '
    const lastBgColor = lastNameReq ? 'bg-color' : 'bg-white '
    return (
      <form className="form-box" onSubmit={this.submittedDetails}>
        <div className="firstName-box">
          <label className="firstName-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <br />
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            onBlur={this.firstNameStatus}
            onChange={this.firstNameField}
            className={`firstName ${firstBgColor}`}
            value={firstName}
          />
          <p className="req-text">{firstNameReq}</p>
        </div>

        <div className="lastName-box">
          <label className="lastName-label" htmlFor="lastName">
            LAST NAME
          </label>
          <br />
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            onBlur={this.lastNameStatus}
            onChange={this.lastNameField}
            className={`lastName ${lastBgColor}`}
            value={lastName}
          />
          <p className="req-text">{lastNameReq}</p>
        </div>

        <div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  firstNameField = e => {
    this.setState({firstName: e.target.value})
  }

  lastNameField = e => {
    this.setState({lastName: e.target.value})
  }

  firstNameStatus = () => {
    const {firstName} = this.state
    if (!firstName) {
      this.setState({firstNameReq: 'Required'})
    } else {
      this.setState({firstNameReq: ''})
    }
  }

  lastNameStatus = () => {
    const {lastName} = this.state
    if (!lastName) {
      this.setState({lastNameReq: 'Required'})
    } else {
      this.setState({lastNameReq: ''})
    }
  }

  submittedDetails = e => {
    e.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName && lastName) {
      this.setState({registrationStatus: true, firstName: '', lastName: ''})
    } else if (!firstName && !lastName) {
      this.setState({firstNameReq: 'Required', lastNameReq: 'Required'})
    } else if (!firstName) {
      this.setState({firstNameReq: 'Required'})
    } else if (!lastName) {
      this.setState({lastNameReq: 'Required'})
    }
  }

  changeStatus = () => {
    this.setState({registrationStatus: false})
  }

  registrationStatusPage = () => (
    <div className="success-page-box">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-img"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="another-response-btn"
        type="button"
        onClick={this.changeStatus}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {lastNameReq, firstNameReq, registrationStatus} = this.state
    console.log(lastNameReq, firstNameReq, registrationStatus)
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <div className="form-container">
          {registrationStatus
            ? this.registrationStatusPage()
            : this.registrationPage()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
