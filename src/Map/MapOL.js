import "./MapOL.css";
import {useEffect, useState} from "react";
import {Map, View} from "ol";
import * as control from "ol/control"
import TileLayer from "ol/layer/Tile";
import {Stamen} from "ol/source";
import MapContextOL from "./MapContextOL";

const BASE_LAYERS = [
  new TileLayer({
    source: new Stamen({
      layer: 'toner-lite'
    })
  }),
  new TileLayer({
    source: new Stamen({
      layer: 'terrain-labels'
    })
  })
]

const VIEW_INIT = {
  // projection: 'EPSG:4326', // Set projection in WGS84 system to get geographic coordinates (long, lat)
  projection: 'EPSG:3857', // Set projection in WGS84 system to get cartesian coordinates (x, y)
  // center: [1.605337, 50.798463],
  center: [190705, 6582721],
  zoom: 11,
  minZoom: 5,
  maxZoom: 15,
}

const CONTROLS_HIDDEN = {
  attribution: false,
  zoom: false,
  rotate: false
}

function MapOL({children}) {

  const [mapOL, setMapOL] = useState();

  useEffect(() => {
    let _mapOL = new Map({
      layers: BASE_LAYERS,
      view: new View(VIEW_INIT),
      controls: control.defaults(CONTROLS_HIDDEN)
    });

    _mapOL.setTarget('map');

    setMapOL(_mapOL);

    return () => _mapOL.setTarget(undefined);
  }, [])

  return (
    <MapContextOL.Provider value={mapOL}>
      <div id="map" className="map">
        {children}
      </div>
    </MapContextOL.Provider>
  );
}

export default MapOL;
