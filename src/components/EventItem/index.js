// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onEventClick = () => {
    setActiveId(id)
  }

  return (
    <li className="list-item">
      <button className="event-img-btn" type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onEventClick}
        />
      </button>
      <p className="event-name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
