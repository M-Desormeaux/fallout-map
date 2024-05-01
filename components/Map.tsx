"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "next/image";

const markers: { geocode: LatLngExpression; popUp: string }[] = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];

const icon = new Icon({
  iconUrl: "/icons/generic_pin.png",
  iconSize: [36, 36],
});

export default function Map() {
  return (
    <MapContainer center={[48.86, 2.3522]} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <ImageOverlay
        bounds={[
          [0, 0],
          [2000, 4000],
        ]}
        url="/IMG_0102.jpg"
      /> */}

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={icon}>
          <Popup>Hi there</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
