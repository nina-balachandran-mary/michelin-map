import {useRef, useEffect} from 'react';
import './Map.css';

import * as MapTiler from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import {Restaurant} from "./types/Restaurant.ts";
// import {MarkerClusterer} from "@googlemaps/markerclusterer";
import {Popup} from "@maptiler/sdk";

export interface MapState {
    restaurants: Restaurant[] | undefined
}

export default function Map({restaurants}: MapState) {
    // const mapContainer = useRef<HTMLDivElement | string>('');
    // const [markers, setMarkers] = useState<Marker[]>([]);
    const map = useRef<MapTiler.Map>();
    const origin = {lng: 0, lat: 0};
    const minZoom = 2;
    const maxZoom = 22;
    const zoom = 1;
    // MapTiler.config.apiKey = 'gVDrLYh82dJxZhHkBNZW';

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        map.current = new MapTiler.Map({
            container: 'map',
            style: MapTiler.MapStyle.DATAVIZ.LIGHT,
            center: [origin.lng, origin.lat],
            minZoom,
            maxZoom
        });

        if (!restaurants) {
            return
        }

        restaurants.forEach((restaurant) => {
            if (!map.current) {
                return
            }
            const marker = new MapTiler.Marker({color: "skyblue"})
                .setLngLat([restaurant.geometry[1], restaurant.geometry[0]])
                .addTo(map.current);

            const popup = new Popup({})
            popup.setHTML(`<span>${restaurant.name}</span>`)
            marker.setPopup(popup)
            // setMarkers([...markers, marker])
            // const markerCluster = new MarkerClusterer({markers, map})
        })

    }, [origin.lng, origin.lat, zoom]);

    return (
        <div className="map-wrap">
            <div id={"map"} className="map"/>
        </div>
    );
}