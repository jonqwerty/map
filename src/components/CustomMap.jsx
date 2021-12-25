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
  console.log(locations)
  const [inside, setInside] = useState([])
  const [ref, setRef] = useState('')
  
    useEffect(() => {
      axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(res.data.positions))
      
          axios.get(process.env.REACT_APP_API_URL)
          .then(res => setInside(res.data.positions))

          
          
    }, [])

   
    console.log(locations)
    
    useEffect(() => {
      const timer = setTimeout(() => 
        axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(res.data.positions))
      , 3000)
      
    }, [flag])
  
    const handleDrag = (e) => {
        const inWindow = []
        //console.log(inWindow)
        const bounds = ref.map.getBounds()
        for (var i = 0; i < locations.length; i++) {
          if (bounds.contains(new google.maps.LatLng(locations[i].lat, locations[i].lng))) {
            inWindow.push(locations[i])
          }
        }
        setInside(inWindow)
     
      //bounds.contains(new google.maps.LatLng(locations.find(item => item.lat =5).lat, locations.find(item => item.id=5).lng))
    }

    const handleClick = (e) => {
      const lat = e.position.lat
      const choosen = inside.find(item => item.lat === lat)
      const withoutChoosen = inside.filter(item => item.lat !== lat)
      const newLocations = [ choosen, ...withoutChoosen]
      setInside(newLocations)
     }


  return (
    <div style={{display:"flex", justifyContent:'space-between' , marginTop:"20px", height:"100%"}}>

      <Navbar flag={flag} setFlag={setFlag} />

      <div style={{width: "800px", height: "500px"}}>
       
        <Map
          className="map" 
          google={google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 50.44055686944465, lng: 30.53022771561217 }}
          ref={map => setRef(map)}

          // onReady={(map) => {
          //   console.log('onReady', ref.map.getBounds())
          // }}

          // onBoundsChange={(e)=>{
          //   console.log('onBoundsChange', ref.map.getBounds())
          // }}

          onDragend={handleDrag}
          onZoomChanged={handleDrag}

          // onClick={(e) => {
          //   console.log('map bounds', ref.map.getBounds())
            //console.log(ref.map.getBounds().contains(new google.maps.LatLng(locations.find(item => item.lat =5).lat, locations.find(item => item.id=5).lng)))    
          // }} 
        >

        { 
          locations.map(loc =>  
              <Marker key={loc._id}  position={{ lat: loc.lat, lng: loc.lng }}  
              onClick={handleClick} 
              />  
          )     
        }
        </Map>
        
      </div>
      
      <div  style={{width: "300px"}}>
        
        {
          inside.map(loc => 
            <div key={loc._id} style={{ backgroundColor:'grey', border: "solid black 2px", margin: "10px"}}>
              <div style={{   margin: "10px"}} >
                 <img style={{ border: "solid black 2px",  width: "255px", height: "250px"}} src={process.env.REACT_APP_API_URL + loc.image} alt="image" /> 
              </div>
              <div style={{padding: "10px"}}>{loc.info} </div>

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