import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { getMapData } from '../services/GetMapData';
import { getUserLocalStorage } from "../services/LoginService";



const containerStyle = {
  width: '100wv',
  height: '90%'
};

const center = {
  lat: -8.270252,
  lng: -35.988211
};

const Map = () => {
  
  const userData = getUserLocalStorage()

  useEffect(() => {
    getMapData(userData.token)
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCYtgBaWn_gy5CWbM0xdZeUlE62qnmvsyw"
  })


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}

    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}
export default Map