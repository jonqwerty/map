import logo from './logo.svg';
import './App.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import CustomMap from './components/CustomMap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Header from './components/Header';
import Navbar from './components/Navbar';




function App() {

  return (
    <>
      <Header />
     
        
      <CustomMap  />
     
      
   </>
  );
}

export default App;
