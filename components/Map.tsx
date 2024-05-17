"use client";
import L from "leaflet";

import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import markersData from "@/app/data.json";

interface markerData {
  geocode: LatLngExpression;
  title: string;
  from: string;
  body: string;
}

// force typing since validation won't be crucial here.
const markers = markersData as markerData[];

const defaultIcon = new Icon({
  iconUrl: "/icons/generic_pin.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  className: "drop-shadow-white",
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
        attribution="&copy; People"
        url="/tiles/{z}/{x}/{y}.jpg"
        noWrap={true}
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={defaultIcon}>
          <Popup offset={[0, -10]}>
            <div className="flex gap-2 flex-col">
              <b className="text-lg">{marker.title}</b>
              {marker?.body && <p>{marker.body}</p>}
              {marker?.from && <i className="text-xs">{marker.from}</i>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
