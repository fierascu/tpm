import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    KmlLayer,
} from "react-google-maps";
import React from 'react';
import pjson from '../package.json';

export const MapWithAKmlLayer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + pjson.googleMapKey,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 45.7, lng: 21.2 }}
    >
        <KmlLayer
            //url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
//            url="./cta.kml"
//url="./tpm.kml"
            options={{ preserveViewport: true }}
        />
    </GoogleMap>
    );
