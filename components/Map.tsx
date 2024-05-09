"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const markers: { geocode: LatLngExpression; popUp: string }[] = [
  {
    geocode: [0, 0],
    popUp: "top left",
  },
  {
    geocode: [0, 1406],
    popUp: "top right",
  },
  {
    geocode: [-930, 0],
    popUp: "bottom left",
  },
  {
    geocode: [-930, 1406],
    popUp: "bottom right",
  },
  {
    geocode: [-(930 / 2), 1406 / 2],
    popUp: "center",
  },
];

const icon = new Icon({
  iconUrl: "/icons/generic_pin.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const customCRS = L.CRS.Simple;

// Adjust the scale and zoom functions for the custom CRS
customCRS.scale = function (zoom) {
  return Math.pow(2, zoom) / 10;
};

customCRS.zoom = function (scale) {
  return Math.log(scale * 10) / Math.LN2;
};

console.log({ customCRS });

export default function Map() {
  return (
    <MapContainer
      center={[-(930 / 2), 1406 / 2]}
      zoom={3}
      minZoom={2}
      maxZoom={6}
      scrollWheelZoom={true}
      crs={customCRS}
    >
      <TileLayer
        attribution="&copy; "
        url="/tiles/{z}/{x}/{y}.jpg"
        noWrap={true}
      />

      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.geocode}
          riseOffset={9}
          icon={icon}
        >
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
