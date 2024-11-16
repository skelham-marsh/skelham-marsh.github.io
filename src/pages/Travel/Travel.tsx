import React from "react"
import styles from "./Travel.module.css"
import { DirectionsRenderer, GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary"
import { MdLocalHotel } from "react-icons/md";
import { WiTrain } from "react-icons/wi";
import { FaCarSide } from "react-icons/fa";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

type MarkerData = {
  label: string,
  position: google.maps.LatLngLiteral,
  colour: string,
  directions: google.maps.DirectionsResult | null
}
const MARKERS = {
  OLD_HALL_ELY: {
    label: "The Old Hall Ely",
    position: {
      lat: 52.382293,
      lng: 0.285697
    },
    colour: "red",
    directions: null
  },
  TRAIN_STATION: {
    label: "Ely Train Station",
    position: {
      lat: 52.390768,
      lng: 0.266479
    },
    colour: "blue",
    directions: null
  },
  TRAVELODGE: {
    label: "Travelodge Ely",
    position: {
      lat: 52.392341,
      lng: 0.240431
    },
    colour: "purple",
    directions: null
  },
  RIVERSIDE_INN: {
    label: "Riverside Inn",
    position: {
      lat: 52.393595,
      lng: 0.267581
    },
    colour: "purple",
    directions: null
  },
  THE_LAMB: {
    label: "The Lamb Hotel",
    position: {
      lat: 52.399965,
      lng: 0.262774
    },
    colour: "purple",
    directions: null
  },
  POETS_HOUSE: {
    label: "Poets House Hotel",
    position: {
      lat: 52.399268,
      lng: 0.259014
    },
    colour: "purple",
    directions: null
  }
} satisfies Record<string, MarkerData>

type MapProps = { destination: (keyof typeof MARKERS) | undefined }
export function Map({ destination }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  const [directions, setDirections] = React.useState<google.maps.DirectionsResult | null>(null)

  React.useEffect(() => {
    if (!isLoaded) {
      return
    }
    if (!destination || destination === "OLD_HALL_ELY") {
      setDirections(null)
      return
    }
    const existingDirections = MARKERS[destination].directions
    if (existingDirections) {
      setDirections(existingDirections)
      return
    }

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: MARKERS[destination].position,
        destination: "The Old Hall Ely",
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          if (!result) return
          setDirections(result)
          MARKERS[destination].directions = result
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  }, [destination, isLoaded])

  if (!isLoaded) return "Loading map..."

  return <GoogleMap
    center={MARKERS.OLD_HALL_ELY.position}
    mapContainerStyle={{ width: "100%", height: "100%" }}
    options={{
      mapTypeControlOptions: { mapTypeIds: [] }, styles: [{
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }]
    }}
    zoom={13}
  >
    {Object.entries(MARKERS).map(([id, { position, colour }]) =>
      <MarkerF
        key={id}
        position={position}
        icon={`http://maps.google.com/mapfiles/ms/icons/${colour}-dot.png`}
      />)}
    {directions === null ? null :
      <DirectionsRenderer
        directions={directions}
        options={{
          preserveViewport: true,
          markerOptions: {
            visible: false
          }
        }} />}
  </GoogleMap >
}

type HotelTripSummaryProps = { hotel: keyof typeof MARKERS }
export function HotelTripSummary({ hotel }: HotelTripSummaryProps) {
  const directions = MARKERS[hotel].directions as google.maps.DirectionsResult | null
  if (directions === null) return
  const duration = directions.routes[0]?.legs[0]?.duration?.text
  const distance = directions.routes[0]?.legs[0]?.distance?.text
  if (!distance || !duration) return
  return `- ${duration} taxi (${distance})`
}
//https://stackoverflow.com/questions/17746740/google-map-icons-with-visualrefresh
//https://mt.google.com/vt/icon?psize=21&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=T&scale=2
type HotelProps = {
  hotel: keyof typeof MARKERS,
  setDestination: (destination: (keyof typeof MARKERS) | undefined) => void
}
export function Hotel({ hotel, setDestination }: HotelProps) {
  const clearDestination = React.useCallback(() => setDestination(undefined), [setDestination])
  const setDestinationToHotel = React.useCallback(() => setDestination(hotel), [hotel, setDestination])
  return <li
    onMouseEnter={setDestinationToHotel}
    onMouseLeave={clearDestination}
    className={styles.route}>
    <span>{MARKERS[hotel].label}</span> <HotelTripSummary hotel={hotel} />
  </li>
}

export function Travel() {
  const [destination, setDestination] = React.useState<(keyof typeof MARKERS) | undefined>(undefined)
  const clearDestination = React.useCallback(() => setDestination(undefined), [setDestination])

  return <div className={styles.wrapper}>
    <div className={styles.left} onMouseLeave={clearDestination}>
      <h2>Venue</h2>
      <div>
        <address>
          The Old Hall Ely <br />
          Stuntney Causeway<br />
          Ely<br />
          Cambridgeshire<br />
          CB7 5TR
        </address>
      </div>

      <h2>
        <FaCarSide className={styles.icon} />
        <span>By Car</span>
      </h2>
      <div>
        <p>
          Free parking is available for all guests.<br />
          Cars can be left overnight but must be collected by 10am the next day.<br />
          The Old Hall is on the outskirts of Ely, opposite the village of Stuntney.<br />
          The entrance is just off the A142.
        </p>
      </div>

      <h2 onMouseEnter={() => setDestination("TRAIN_STATION")} onMouseLeave={clearDestination} className={styles.route}>
        <WiTrain className={styles.icon} style={{ fontSize: "2.5rem", marginLeft: "-0.2rem", marginRight: "0.2rem" }} />
        <span>By Train</span>
      </h2>
      <div>
        <p>
          Ely train station is the closest station to The Old Hall and is then just a 4 minute drive by taxi
        </p>
      </div>

      <h2>
        <MdLocalHotel className={styles.icon} />
        <span>Staying</span>
      </h2>
      <div>
        <p>There are plenty of hotels options in Ely we have listed a few below but there are more to pick from</p>
        <ul>
          <Hotel hotel="TRAVELODGE" setDestination={setDestination} />
          <Hotel hotel="RIVERSIDE_INN" setDestination={setDestination} />
          <Hotel hotel="THE_LAMB" setDestination={setDestination} />
          <Hotel hotel="POETS_HOUSE" setDestination={setDestination} />
        </ul>
      </div>
    </div >
    <div className={styles.right}>
      <ErrorBoundary>
        <Map destination={destination} />
      </ErrorBoundary>
    </div>
  </div >
}