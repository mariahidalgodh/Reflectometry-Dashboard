import {useContext, useEffect, useState} from "react";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {Circle, Fill, Stroke, Style} from "ol/style";
import {GeoJSON} from "ol/format"
import MapContextOL from "../Map/MapContextOL";
import {useSelector} from "react-redux";
import queryReflectivityStyle from "../Map/helperReflectivityStyle";

const DEFAULT_COLOR = "#ff0000"

const VectorLayerOL = ({url}) => {

  const mapOL = useContext(MapContextOL);

  const dateSelected = useSelector(state => state.query.date)
  const satelliteSelected = useSelector(state => state.query.PRN)

  const [sourceOL, setSourceOL] = useState();
  const [layerOL, setLayerOL] = useState();

  useEffect(() => {
    let _vectorSourceOL = new VectorSource({
      url,
      format: new GeoJSON()
    });
    setSourceOL(_vectorSourceOL)
  }, [url])

  useEffect(() => {
    if (!mapOL) return;

    const _lineStyle = new Stroke({
      color: DEFAULT_COLOR
    })

    const _pointSize = 8
    const _pointFill = new Fill({
      color: DEFAULT_COLOR
    });
    const _pointStyle = new Circle({
      radius: _pointSize,
      fill: _pointFill
    })

    const _defaultStyleOL = new Style({
      stroke: _lineStyle,
      image: _pointStyle
    })

    let _vectorLayerOL = new VectorLayer({
      source: sourceOL,
      style: _defaultStyleOL,
    });

    setLayerOL(_vectorLayerOL);

    mapOL.addLayer(_vectorLayerOL);

    return () => mapOL.removeLayer(_vectorLayerOL);

  }, [mapOL, sourceOL])

  useEffect(() => {
    if (!layerOL) return;

    let query = {
      date: dateSelected,
      PRN: satelliteSelected
    };

    let queryStyle = queryReflectivityStyle(query);
    layerOL.setStyle(queryStyle);

  }, [layerOL, dateSelected, satelliteSelected]);

  return null;
};

export default VectorLayerOL;
