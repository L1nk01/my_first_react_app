import './App.css'
import Card from './components/Card'
import ShowHide from './components/ShowHide'
import vehicles from "./data/vehicles"

function App() {
  const vehicleList = vehicles.map((v, index) => {
    return <Card key={index} img={v.image} title={v.name} description = {v.description} />
  })
  
  return (
    <>
      <div id="main">
        <h1>Prueba React</h1>

        <div className="container">
          {vehicleList}
        </div>

        <ShowHide />
      </div>
    </>
  )
}

export default App
