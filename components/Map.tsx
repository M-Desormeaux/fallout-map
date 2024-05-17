"use client";
import L from "leaflet";

import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const markers: {
  geocode: LatLngExpression;
  title: string;
  from?: string;
  body?: string;
}[] = [
  // ! Fallout Locations
  {
    geocode: [-517, 197],
    title: "Vault 12",
    from: "Fallout",
    body: "Door was intentionally designed not to seal correctly; As a result, inhabitants became ghouls and founded the city of Necropolis.",
  },
  {
    geocode: [-438, 177],
    title: "Vault 13",
    from: "Fallout",
    body: "Inhabitants chose to remain in isolation until a water chip failure forced them to send the Vault Dweller for a replacement. Later schisms led to downfall of the vault.",
  },
  {
    geocode: [-448, 228],
    title: "Vault 15",
    from: "Fallout",
    body: "As a social experiment, a diverse ethnic group was selected for observation. Due to schisms the inhabitants would form rival gangs or later found Shady Sands.",
  },
  {
    geocode: [-553.4, 145],
    title: "Demo Vault",
    from: "Fallout",
    body: "Originally a demonstration vault, that was successfully used by locals as a shelter and used as a Headquarters.",
  },

  // ! Fallout 2 Locations
  {
    geocode: [-329, 190],
    title: "Vault 8",
    from: "Fallout 2",
    body: "Inhabitants worked as advertised lead to the founding of Vault City",
  },

  // ! Fallout TV Show
  {
    geocode: [-544, 142.5], // * ESTIMATE LOCATION
    title: "Vaults 31, 32, & 33",
    from: "Fallout TV Series",
  },
];

const defaultIcon = new Icon({
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
      center={[-448, 228]}
      zoom={4}
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
