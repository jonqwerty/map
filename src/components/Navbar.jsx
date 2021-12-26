import React, { useState }  from 'react'
import axios from 'axios'



const Navbar = (props) => {

    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [info, setInfo] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    const handleLat = (e) => {
        setLat(e.target.value.split(' ').join(''))
    }

    const handleLng = (e) => {
        setLng(e.target.value.split(' ').join('') )
    }

    const handleInfo = (e) => {
        setInfo(e.target.value)
    }


    const handleClick =  async (e) => {
        e.preventDefault()
        
        const formData = new FormData()
              
        if (lat.match(/^[0-9]+[.]?[0-9]+$/) && lng.match(/^[0-9]+[.]?[0-9]+$/) && info.length && selectedFile) {
            formData.append('lat', lat)
            formData.append('lng', lng)
            formData.append('info', info)
            formData.append('image', selectedFile)
    
            let axiosConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                }
            }
          
            await  axios.post(process.env.REACT_APP_API_URL, formData, axiosConfig)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                })
       
                setLat('')
                setLng('')
                setInfo('')
                setSelectedFile(null)
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
                    Завантажити фото: 
                    <input
                        
                        type="file" 
                        defaultValue={selectedFile}
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                       />
                    </label >

                    <button onClick={handleClick  }>Здати в оренду</button>  
                   
            </form>
        </div>
    )
}

export default Navbar