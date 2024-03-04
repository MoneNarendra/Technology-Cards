// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`list-card ${className}`}>
      <div className="title-container">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <div className="img-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
