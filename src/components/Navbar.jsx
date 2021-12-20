import React, { useState }  from 'react'
import axios from 'axios'

const sendData = async (lat, lng, info, image) => {
    try {
        const response = await axios.post('http://localhost:5000/', {
        lat,
        lng,
        info,
        image
        })
        alert(response.data.message)
    } catch (e) {

    }
    
}


const Navbar = (props) => {

    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const handleLat = (e) => {
        setLat(e.target.value.split(' ').join(''))
    }

    const handleLng = (e) => {
        setLng(e.target.value.split(' ').join('') )
    }

    const handleInfo = (e) => {
        setInfo(e.target.value.split(' ').join(''))
    }

    const handleImage = (e) => {
        setImage(e.target.value.split(' ').join(''))
    }

    const handleClick =  (e) => {
        e.preventDefault()
        if (lat.match(/^[0-9]+[.]?[0-9]+$/) && lng.match(/^[0-9]+[.]?[0-9]+$/) && info.length && image.length) {
        const obj = {
            lat : lat,
            lng: lng,
            info: info,
            image: image
        }
        console.log(obj)
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          }
          
        axios.post(process.env.REACT_APP_API_URL, obj, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
       
        
        setLat('')
        setLng('')
        setInfo('')
        setImage('')
        props.setFlag(!props.flag) 

       
        } else {
            alert('Coordinates must be numeric with ".", and all fields must be filling')
        }
       
    }


    return (
        <div style={{ height:"500px", width:"6em", backgroundColor: 'grey', textAlign: "center", fontSize: "40px"}}>
            
            <form >
                    
                    <label >
                    Широта:
                    <input
                        value={lat}
                        type="text" 
                        
                        onChange={handleLat}
                       />
                    </label >
                   
                    <label >
                    Довгота:
                    <input
                        value={lng}
                        type="text" 
                        
                        onChange={handleLng}
                       />
                    </label >
                    <label >
                    
                    Інформація:
                    <input
                        value={info}
                        type="text" 
                       
                        onChange={handleInfo}
                       />
                    </label >
                    <label>
                    Фото (Url):
                    <input
                        value={image}
                        type="text" 
                        
                        onChange={handleImage}
                       />
                    </label >

                    <button onClick={handleClick  }>Здати в оренду</button>  
                   
            </form>
        </div>
    )
}

export default Navbar