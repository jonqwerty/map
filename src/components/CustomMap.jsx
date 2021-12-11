import React, { useEffect, useState }  from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { locationsData } from '../data/data'
import Navbar from './Navbar'


const mapStyles = {
   width: "800px",
  height: "500px",
}



const CustomMap = ({google}) => {

const [locations, setLocations] = useState([])
const [locationId, setLocationId] = useState(null)
const [locationInfo, setLocationInfo] = useState(null)
const [locationImage, setLocationImage] = useState(null)

  useEffect(() => {
    setLocations(locationsData )
  }, [])

  useEffect(() => {
    if (locationId) {
      const location = locations.find(item => item.id === locationId)
      setLocationInfo(location.info )
      setLocationImage(location.image)
    }
    
  }, [locationId])

  console.log(locationId)
  
  return (
    <div style={{display:"flex", justifyContent:'space-between' , marginTop:"20px", height:"100%"}}>
      <Navbar />
      <div style={{width: "800px",height: "500px",}}>

        <Map 
          google={google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 50.44055686944465, lng: 30.53022771561217 }}
        >
        {locations.map(
            loc =>  <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }} onClick={() => setLocationId(loc.id)} />
            )}

        </Map>
      </div>
      <div style={{width: "300px", height: "300px"}}>
        <div>Info about place</div>
        <img style={{width: "300px", height: "300px"}} src={locationImage} alt="" />
              
        <div style={{}}>{locationInfo} </div>
      </div>
    </div>
    
  )

}


 export default GoogleApiWrapper({
 apiKey: "AIzaSyBEoYmhsxCFMlPtJaP_4B2SSjRDhtweDf0",
 })(CustomMap);