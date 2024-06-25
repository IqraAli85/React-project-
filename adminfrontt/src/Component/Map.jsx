import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const MyMap = () => {
  const position = [31.6088041, 74.3031637];
  const markers = [
    { position: [31.6088041, 74.3031637], text: 'Batti Chowk ' },
    { position: [31.5443047, 74.2946408], text: 'Marker 2' },
    { position: [31.57492645, 74.29959577592864], text: 'UVAS' },
  ];

  const [gpsCoordinates, setGpsCoordinates] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  const createPolyline = (map) => {
    const latlngs = markers.map((marker) => marker.position);

    const polyline = L.polyline(latlngs, { color: 'red' });
    const geojson = polyline.toGeoJSON();
    const url = `https://example.com/?polyline=${encodeURIComponent(JSON.stringify(geojson))}`;
    console.log(url);

    polyline.addTo(map);
  };

  const calculateRemainingTime = (map) => {
    if (gpsCoordinates) {
      const { lat, lng } = gpsCoordinates;
      const start = L.latLng(lat, lng);
      const end = L.latLng(markers[1].position[0], markers[1].position[1]);

      L.Routing.control({
        waypoints: [start, end],
        routeWhileDragging: true,
      })
        .on('routesfound', (e) => {
          const routes = e.routes;
          if (routes && routes.length > 0) {
            const totalTime = routes[0].summary.totalTime; // in seconds
            const remainingTime = Math.ceil(totalTime / 60); // in minutes
            setRemainingTime(remainingTime);
          }
        })
        .addTo(map);
    }
  };

  const AddMarkersToMap = () => {
    const map = useMap();

    useEffect(() => {
      map.locate({ setView: true });

      map.on('locationfound', function (e) {
        const marker = L.marker(e.latlng).addTo(map);
        marker.bindPopup('You are here!').openPopup();

        // Update the GPS coordinates and last update time
        setGpsCoordinates(e.latlng);
        setLastUpdateTime(new Date());

        // Calculate remaining time
        calculateRemainingTime(map);
      });
    }, [map]);

    return (
      <>
        {markers.map((marker, index) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
        <button onClick={() => createPolyline(map)}>Create polyline</button>

        {/* Display the GPS coordinates, last update time, and remaining time */}
        {gpsCoordinates && (
          <Marker position={gpsCoordinates}>
            <Popup>
              <div>Coordinates: {gpsCoordinates.toString()}</div>
              <div>Last Update Time: {lastUpdateTime.toString()}</div>
              <div>Remaining Time: {remainingTime} minutes</div>
            </Popup>
          </Marker>
        )}
      </>
    );
  };

  return (
    <div>
      <MapContainer center={position} zoom={14} style={{ height: '100vh' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMarkersToMap />
      </MapContainer>
    </div>
  );
};

export default MyMap;





















































// simple gps code
// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-gps';
// import 'leaflet.locatecontrol';
// import 'leaflet/dist/leaflet.css';

// const MyMap = () => {
//   const position = [31.6088041, 74.3031637];
//   const markers = [
//     { position: [31.6088041, 74.3031637], text: 'Marker 1' },
//     { position: [31.5443047, 74.2946408], text: 'Marker 2' },
//   ];

//   const createPolyline = (map) => {
//     const latlngs = markers.map((marker) => marker.position);

//     const polyline = L.polyline(latlngs, { color: 'red' });
//     const geojson = polyline.toGeoJSON();
//     const url = `https://example.com/?polyline=${encodeURIComponent(JSON.stringify(geojson))}`;
//     console.log(url);

//     polyline.addTo(map);
//   };

//   const AddMarkersToMap = () => {
//     const map = useMap();

//     useEffect(() => {
//       map.whenReady(() => {
//         const gpsControl = L.control.gps({
//           autoActive: true,
//           autoCenter: true,
//         });
        
//         gpsControl.addTo(map);

//         const locateControl = L.control.locate().addTo(map);

//         map.on('locationfound', function (e) {
//           const marker = L.marker(e.latlng).addTo(map);
//           marker.bindPopup('You are here!').openPopup();
//         });

//         locateControl.getContainer().addEventListener('locationerror', function (e) {
//           // Handle errors in locating the user
//           if (e.code === e.TIMEOUT) {
//             // Handle timeout error
//             console.log('Geolocation error: Timeout expires');
//           } else {
//             // Handle other geolocation errors
//             console.log('Geolocation error:', e.message);
//           }
//         });

//         return () => {
//           map.removeControl(gpsControl);
//           map.removeControl(locateControl);
//         };
//       });
//     }, [map]);

//     return (
//       <>
//         {markers.map((marker, index) => (
//           <Marker key={index} position={marker.position}>
//             <Popup>{marker.text}</Popup>
//           </Marker>
//         ))}
//         <button onClick={() => createPolyline(map)}>Create polyline</button>
//       </>
//     );
//   };

//   return (
//     <div>
//       <MapContainer center={position} zoom={14} style={{ height: '100vh' }}>
//         <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
//         <AddMarkersToMap />
//       </MapContainer>
//     </div>
//   );
// };

// export default MyMap;











