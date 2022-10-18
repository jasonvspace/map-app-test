import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader  } from "@react-google-maps/api";
import {selectChargers} from "../store";

const containerStyle = {
    width: '100%',
    height: '50vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const [ready, setReady] = useState<boolean>(false);
    const [activeMarker, setActiveMarker] = useState<number | null>(null);
    const {chargers} = useSelector(selectChargers);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_APP_API_KEY || '' // add Google Map API KEY to .env
    })

    const handleActiveMarker = (marker: number) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    useEffect(() => {
        if (isLoaded) {
            setTimeout(() => {
                setReady(true);
            }, 100);
        }
    }, [isLoaded]);

    return loadError? <div>Map cannot be loaded right now, sorry.</div> : (isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
        >
            {ready && chargers.map(({ lat, long, name }, index) => (
                <Marker
                    key={index}
                    position={{lat, lng: long}}
                    onClick={() => handleActiveMarker(index)}
                >
                    {activeMarker === index ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div>{name}</div>
                            </InfoWindow>
                            ) : null}
                </Marker>
            ))}
        </GoogleMap>
        ) : <div>Loading...</div>);
}

export default Map;
