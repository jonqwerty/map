import React, { useEffect, useState }  from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Navbar from './Navbar'
import axios from 'axios'


const mapStyles = {
   width: "800px",
  height: "500px",
}


const CustomMap = ({google}) => {

  const [flag, setFlag] = useState(false)
  const [locations, setLocations] = useState([])
  const [inside, setInside] = useState([])
  const [ref, setRef] = useState('')

    
    useEffect(async() => {
      console.log('first effect')
      
      await axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(res.data.positions))
          
          
      await axios.get(process.env.REACT_APP_API_URL)
            .then(res =>  setInside(res.data.positions))

      
              
    }, [])
   
   
    useEffect(async() => {
        await axios.get(process.env.REACT_APP_API_URL)
          .then(res => setLocations(res.data.positions))
          
        await axios.get(process.env.REACT_APP_API_URL)
          .then(res => setInside(res.data.positions))
          
         
    }, [flag])

       
  
    const handleDrag = (e) => {
        const inWindow = []
        const bounds = ref.map.getBounds()
        console.log(bounds)
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
    <div style={{display:"flex", justifyContent:'space-between' , marginTop:"20px", height:"100%"}}  >

      <Navbar flag={flag} setFlag={setFlag} />

      <div style={{width: "800px", height: "500px"}} >
       
        <Map
          id="map"
          className="map" 
          google={google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 50.44055686944465, lng: 30.53022771561217 }}
          ref={map => setRef(map)}
         
          onReady={handleDrag}

          onDragend={handleDrag}
          onZoomChanged={handleDrag}
          onClick={handleDrag}
          onTilesloaded={handleDrag}
          // onBoundsChange={(e)=>{console.log('onBoundsChange', ref.map.getBounds())}}
          //onMouseover={handleDrag}
          //onIdle={() => console.log('idle')}
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
      
      <div  style={{width: "300px", height: "600px" }}  >
        
        {

          inside.map(loc => 
            <div key={loc._id} style={{ backgroundColor:'grey', border: "solid black 2px", margin: "10px"}}>
              <div style={{   margin: "10px"}} >
                 <img style={{ border: "solid black 2px",  width: "255px", height: "250px"}} 
                 src={`data:${loc.contentType};base64,${loc.imageBase64}`} alt="image"  
                 
                 /> 
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