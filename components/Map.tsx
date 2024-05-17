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

  // ! Fallout New Vegas Locations
  {
    geocode: [-501.5, 241.5],
    title: "Vault 3",
    from: "Fallout: New Vegas",
    body: "Inhabitants stayed in isolation until a water leak forced the need for trade. Subsequently taken over by Fiends.",
  },
  {
    geocode: [-508, 250],
    title: "Vault 11",
    from: "Fallout: New Vegas",
    body: "Inhabitants heavily persuaded to sacrifice regularly for group safety. Coups much later on lead to discovery that the threat of harm was a ruse.",
  },
  {
    geocode: [-504, 239],
    title: "Vault 19",
    from: "Fallout: New Vegas",
    body: "Inhabitants split into two groups and manipulated into believing the other group was an enemy. Fates unknown, but vault is later under control of Powder Gangers.",
  },
  {
    geocode: [-499, 245.5],
    title: "Vault 21",
    from: "Fallout: New Vegas",
    body: "Vault themed around gambling and the long term effects of gambling based resolution. System worked well until Robert House won the vault in a game of blackjack and turned it into a hotel.",
  },
  {
    geocode: [-494, 241.5],
    title: "Vault 22",
    from: "Fallout: New Vegas",
    body: "Originally intended to study genetically modified flora and crops; Due to gene mutation, inhabitants became infected with fungal spores and became spore carriers.",
  },
  {
    geocode: [-501, 250],
    title: "Vault 34",
    from: "Fallout: New Vegas",
    body: "Supplied with an overstocked armory and weak protections. Inhabitants manually enforced restrictions for safety, leading to a schism that ultimately causes the reactor to leak causing death and ghoulification.",
  },

  // ! Fallout 3 Locations
  {
    geocode: [-421, 1168.4],
    title: "Vault 87",
    from: "Fallout 3",
    body: "Forced evolutionary experimentation, leading to inhabitants all turned into super mutants and later taken over by said inhabitants.",
  },
  {
    geocode: [-414.5, 1179],
    title: "Vault 92",
    from: "Fallout 3",
    body: "Experiment with the use of white noise to document effects. Inhabitants were driven to a state of madness and eventually everyone died.",
  },
  {
    geocode: [-422.6, 1175],
    title: "Vault 101",
    from: "Fallout 3",
    body: "Vault in which Overseer had complete authority and no intentions of opening. Vault eventually fell to civil war after an outsider was welcomed in and then escaped.",
  },
  {
    geocode: [-420.4, 1172.9],
    title: "Vault 106",
    from: "Fallout 3",
    body: "Air supply heavily drugged to test effects. Inhabitant fate unknown but drug supply remains in air for following centuries.",
  },
  {
    geocode: [-419.2, 1181.3],
    title: "Vault 108",
    from: "Fallout 3",
    body: "Vault outfitted with cloning machine. Fates unknown but vault is occupied by multiple men bearing the name 'Gary'.",
  },
  {
    geocode: [-423.7, 1170],
    title: "Vault 112",
    from: "Fallout 3",
    body: "Vault inhabitants trapped in virtual reality by Overseer, to be tortured for his amusement.",
  },
];

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
