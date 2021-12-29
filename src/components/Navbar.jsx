import React, { useState }  from 'react'
import axios from 'axios'



const Navbar = (props) => {

    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [info, setInfo] = useState('')
    const [file, setSelectedFile] = useState(null)

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

        if (lat.match(/^[0-9]+[.]?[0-9]+$/) && lng.match(/^[0-9]+[.]?[0-9]+$/) && info.length && file) {
            formData.append('lat', lat)
            formData.append('lng', lng)
            formData.append('info', info)
            formData.append('image', file)
    
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1])
            // }
            const result = await  axios.post(process.env.REACT_APP_API_URL, formData, {headers:{"Access-Control-Allow-Origin": "*"}})
            setLat('')
                     setLng('')
                     setInfo('')
                     setSelectedFile(null)
                    props.setFlag(!props.flag) 

        } else {
                alert('Coordinates must be numeric with ".", and all fields must be filling')
            }
        // if (lat.match(/^[0-9]+[.]?[0-9]+$/) && lng.match(/^[0-9]+[.]?[0-9]+$/) && info.length && file) {
        //     formData.append('lat', lat)
        //     formData.append('lng', lng)
        //     formData.append('info', info)
        //     formData.append('image', file)
    
        //     let axiosConfig = {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             //"Access-Control-Allow-Origin": "*",
        //         }
        //     }
        //     console.log(formData)
        //     const result = await  axios.post(process.env.REACT_APP_API_URL, formData)

        //         setLat('')
        //         setLng('')
        //         setInfo('')
        //         setSelectedFile(null)
        //         props.setFlag(!props.flag) 

        // } else {
        //     alert('Coordinates must be numeric with ".", and all fields must be filling')
        // }
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
                        name="image"
                        type="file" 
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                       />
                    </label >

                    <button onClick={handleClick  }>Здати в оренду</button>  
                   
            </form>
        </div>
    )
}

export default Navbar