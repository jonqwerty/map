import React, { useEffect, useState }  from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { locationsData } from '../data/data'
import Navbar from './Navbar'
import axios from 'axios'


const mapStyles = {
   width: "800px",
  height: "500px",
}


const CustomMap = ({google}) => {

  const [flag, setFlag] = useState(false)

  const [locations, setLocations] = useState([])
  const [locationId, setLocationId] = useState(null)
  const [locationInfo, setLocationInfo] = useState(null)
  const [locationImage, setLocationImage] = useState(null)

  console.log('locations', locations)
  const [ref, setRef] = useState('')
  console.log('ref', ref)

 
    useEffect(() => {
      axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(JSON.parse(res.data.positions)))
    }, [])

    useEffect(() => {
      const timer = setTimeout(() => 
        axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(JSON.parse(res.data.positions)))
      , 3000)
      
    }, [flag])
  
 

    // useEffect(() => {
    //  alert('yi')


    // }, [locationId])

    // console.log(locationId)

    // const handleClick = (e) => {
     
    //   const first = locations.find(item => item.id === locationId)
    //   locations.filter(item => item.id === locationId)
    //   const newLocations = [ first, ...locations]
    //   setLocations(newLocations)
    // }


  return (
    <div style={{display:"flex", justifyContent:'space-between' , marginTop:"20px", height:"100%"}}>

      <Navbar flag={flag} setFlag={setFlag} />

      <div style={{width: "800px",height: "500px",}}>
       
        <Map
        id="map"
          className="map" 
          google={google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 50.44055686944465, lng: 30.53022771561217 }}
          ref={map => setRef(map)}

          onReady={(map) => {
            console.log('onReady', ref.map.getBounds())
          }}

          onBoundsChange={(e)=>{
            console.log('onBoundsChange', ref.map.getBounds())
          }}

          onClick={(e) => {
            console.log('map bounds', ref.map.getBounds())
            console.log(ref.map.getBounds().contains(new google.maps.LatLng(locations.find(item => item.id=5).lat, locations.find(item => item.id=5).lng)))    
          }}
          
        >
        
        {
        locations.map(loc =>  
            <Marker key={loc.id}  position={{ lat: loc.lat, lng: loc.lng }}  
           // onClick={() => setLocationId(loc.id)} 
            />
            
        )}
        </Map>
        
      </div>
      <div  style={{width: "300px", border: "solid black 1px"}}>
        
        {
          locations.map(loc => 
            <div key={loc.id} style={{ paddingBottom: "30px"}}>
              <div >
                <img style={{width: "300px", height: "300px"}} src={loc.image} alt="image" />
              </div>
              <div style={{margin: "5px"}}>{loc.info} </div>

            </div>
          )
        }
        </div>
    </div>  
  )
}


 export default GoogleApiWrapper({
 apiKey: process.env.API_KEY,
 })(CustomMap);