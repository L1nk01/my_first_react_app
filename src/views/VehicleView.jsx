import PropTypes from 'prop-types'
import Card from '../components/Card'
import "./VehicleView.css"
import { Link } from "react-router-dom"

function VehicleView({vehicle}) {
  return (
    <div className="VehicleView">
      <Card
        img={vehicle.image}
        title={vehicle.name}
        description={vehicle.description}
      />

      <Link to="/"><button>Go back</button></Link>
    </div>
  )
}

VehicleView.propTypes = {
  vehicle: PropTypes.object,
}

export default VehicleView