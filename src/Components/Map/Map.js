import { useState, useCallback, memo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Map.css";

const containerStyle = {
  width:"100%",
  height: '50vh'
};

const MyComponent = ({ foodBankData }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  // console.log(foodBankData.lat_lng);
  const latLng = foodBankData ? foodBankData.lat_lng.split(`,`) : [];
  // console.log(latLng);

 
  let center = {
    lat: Number(latLng[0]),
    lng: Number(latLng[1])
  }

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    //const bounds = new window.google.maps.LatLngBounds(center);
    //map.fitBounds(bounds);
    setMap(map)
    // eslint-disable-next-line 
  }, [])
  
  //dev feedback only remove  
  //console.log(map)


  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='map'>
      <GoogleMap 
        className='map'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
       <Marker 
       key="marker_1"
       position={center} />
       

      
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>     
  

      </div>
  ) : <div className='map'></div>
}
export default memo(MyComponent)