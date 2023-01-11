// Write your code here
import './index.css'

const registrationConstants = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {selectedEvent} = props
  const registeredStatus = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const yetToRegisterStatus = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="reg-display-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const closedRegistrationStatus = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="reg-closed-text">Registrations Are Closed Now!</h1>
      <p className="reg-display-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const defaultView = () => (
    <div className="active-container">
      <p className="reg-display-text">
        Click on an event, to view its registration details.
      </p>
    </div>
  )
  if (selectedEvent[0] === undefined) {
    return defaultView()
  }
  switch (selectedEvent[0].registrationStatus) {
    case registrationConstants.registered:
      return registeredStatus()
    case registrationConstants.yetToRegister:
      return yetToRegisterStatus()
    case registrationConstants.registrationsClosed:
      return closedRegistrationStatus()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
