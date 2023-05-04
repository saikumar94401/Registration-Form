import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstErrorMsg: false,
    lastErrorMsg: false,
    formSubmitted: false,
  }

  checkFirstName = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstErrorMsg: true})
    } else {
      this.setState({firstErrorMsg: false})
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  checkLastName = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastErrorMsg: true})
    } else {
      this.setState({lastErrorMsg: false})
    }
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    this.checkFirstName()
    this.checkLastName()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: true, firstName: '', lastName: ''})
    }
  }

  successPage = () => {
    const updateStatus = () => {
      this.setState({formSubmitted: false})
    }
    return (
      <div className="success-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="">Submitted Successfully</p>
        <button type="button" className="submit-button" onClick={updateStatus}>
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {
      firstName,
      firstErrorMsg,
      lastName,
      lastErrorMsg,
      formSubmitted,
    } = this.state
    const errorFirstStyle = firstErrorMsg ? 'first-error-style' : ''
    const errorLastStyle = lastErrorMsg ? 'first-error-style' : ''
    return (
      <div className="app-container">
        <div className="registration-container">
          <h1 className="heading">Registration</h1>
          <div className="form-div-container">
            {formSubmitted ? (
              this.successPage()
            ) : (
              <form className="form-container" onSubmit={this.submitForm}>
                <div className="name-container">
                  <label htmlFor="firstName" className="name-label">
                    FIRST NAME
                  </label>
                  <input
                    value={firstName}
                    onChange={this.updateFirstName}
                    onBlur={this.checkFirstName}
                    id="firstName"
                    className={`name-input ${errorFirstStyle}`}
                    placeholder="First name"
                  />
                  {firstErrorMsg && <p className="error-msg">*Required</p>}
                </div>
                <div className="name-container">
                  <label htmlFor="lastName" className="name-label">
                    LAST NAME
                  </label>
                  <input
                    value={lastName}
                    onChange={this.updateLastName}
                    onBlur={this.checkLastName}
                    id="lastName"
                    className={`name-input ${errorLastStyle}`}
                    placeholder="Last name"
                  />
                  {lastErrorMsg && <p className="error-msg">*Required</p>}
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
