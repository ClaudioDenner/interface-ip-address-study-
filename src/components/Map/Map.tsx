import style from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from '../../assets/images/icon-location.svg'
import {useContext } from 'react'
import { ContextGlobal } from '../../context/ProviderContext'


const  Map = ()=>{

  const context = useContext(ContextGlobal)
  const lat = context.dataAPI?.location?.lat as number
  const lng = context.dataAPI?.location?.lng as number

  

  const position: LatLngExpression = [lat, lng]

  const myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: undefined,
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: markerIcon,
    shadowSize: undefined,
    shadowAnchor: undefined
});




  return (
    <div className={style.container}>
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} zoomControl={false}>
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
}

export default Map