import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
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
  const [data, setData] = useState([])

  useEffect(() => {
    getMapData(userData.token).then((res) => {
      setData(res)
    })
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
      {data.map((item, key) => {
        return <Marker
          key={key}
          position={{ lat: item.lat, lng: item.lng }} />
      })}
      <></>
    </GoogleMap>
  ) : <></>
}
export default Map