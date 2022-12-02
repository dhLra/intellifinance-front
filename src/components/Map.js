import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { getMapData } from '../services/MapService/GetMapData';
import { getUserLocalStorage } from "../services/LoginService/LoginService";

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
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const handleClose = () => setShow(false);

  const handleShow = (address, address_number) => {
    setShow(true);
    setAddress(address)
    setAddressNumber(address_number)
  }

  useEffect(() => {
    getMapData(userData.token).then((res) => {
      setData(res)
    })
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
   // googleMapsApiKey: "AIzaSyCYtgBaWn_gy5CWbM0xdZeUlE62qnmvsyw"
    googleMapsApiKey: "AIzaSyCs-ZxvCoAVLrCAzZFgAuFMK6NnoCs3AN8"
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
          position={{ lat: item.lat, lng: item.lng }}
          onClick={() => handleShow(item.address, item.address_number)} />
      })}
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Relatório de Gastos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Rua: {address}, Nº {addressNumber}</h5>
            <hr></hr>
            {data.filter(item => item.address === address).map((item) => {
              return (<>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Local do Gasto</label>
                      <input type="text" class="form-control" disabled value={item.establishment} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Quantia gasta</label>
                      <input type="text" class="form-control" disabled value={'R$ '+ item.amount} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Data (AA-MM-DD)</label>
                      <input type="text" class="form-control" disabled value={item.expense_date} />
                    </div>
                  </div>
                </div>
              </>)
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </GoogleMap>
  ) : <></>
}
export default Map