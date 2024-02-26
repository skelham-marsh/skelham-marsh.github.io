import React from "react"
import styles from "./Travel.module.css"
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

const googleMapsApiKey = import.meta.env.VITE_API_KEY

const OLD_HALL_ELY = {
  lat: 52.382427,
  lng: 0.282677
}

export function Travel() {
  console.log(googleMapsApiKey)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  })

  return <div className={styles.wrapper}>
    <div className={styles.left}>
      <h2>Getting there</h2>
      <h3>Venue</h3>
      <address>
        The Old Hall Ely <br />
        Stuntney Causeway<br />
        Ely<br />
        Cambridgeshire<br />
        CB7 5TR
      </address>

      <h3>By Car </h3>
      <p>
        The Old Hall is on the outskirts of the village of Stuntney, 1 mile from Ely. The entrance is just off the A142
        Free parking is available for all guests and care can be left overnight and collected by 10am the next day
      </p>
      <h3>By Train </h3>
      <p>
        Ely train station is the closest station to The Old Hall and is then just a 4 minute drive by taxi
      </p>

      <h2>Staying</h2>
      <p>There are plenty of hotels options in Ely we have listed a few below but there are more to pick from</p>
      <ul>
        <li>Travelodge Ely</li>
        <li>Poets House Hotel</li>
        <li>The Lamb Hotel</li>
        <li>Riverside Inn</li>
      </ul>

    </div >
    <div className={styles.right}>
      {!isLoaded ? "Loading map..." :
        <GoogleMap
          center={OLD_HALL_ELY}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={13}
        >
          <MarkerF position={OLD_HALL_ELY} />
        </GoogleMap>}
    </div>
  </div >
}