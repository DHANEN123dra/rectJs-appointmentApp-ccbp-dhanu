import './index.css'

const AppointmentItem = props => {
  const {appointmentDetailes, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetailes
  const onClickStar = () => {
    toggleIsStarred(id)
  }
  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-container">
      <div className="title-star-container">
        <h1 className="heading-title">{title}</h1>
        <button
          className="button"
          data-testid="star"
          onClick={onClickStar}
          type="button"
        >
          <img className="img-star" src={starImageUrl} alt="star" />
        </button>
      </div>
      <p className="date-text">{date}</p>
    </li>
  )
}

export default AppointmentItem
