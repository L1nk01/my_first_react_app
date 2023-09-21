import PropTypes from 'prop-types'
import "./Card.css"
import { Link } from "react-router-dom"

function Card({ img = "Imagen", title = "Titulo", description = "Descripcion" }) {
  return (
    <div className="Card">
      <img src={img}/>
      <Link to={title}><h2>{title}</h2></Link>
      <p>{description}</p>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Card