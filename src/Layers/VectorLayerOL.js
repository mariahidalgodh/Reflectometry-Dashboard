import {useContext, useEffect} from "react";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {Circle, Fill, Stroke, Style} from "ol/style";
import {GeoJSON} from "ol/format"
import MapContextOL from "../Map/MapContextOL";

const DEFAULT_COLOR = "#ff0000"

const VectorLayerOL = ({url}) => {

  const mapOL = useContext(MapContextOL);

  useEffect(() => {
    if (!mapOL) return;

    let _vectorSourceOL = new VectorSource({
      url,
      format: new GeoJSON()
    });

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

    let _styleOL = new Style({
      stroke: _lineStyle,
      image: _pointStyle
    })

    let _vectorLayerOL = new VectorLayer({
      source: _vectorSourceOL,
      style: _styleOL,
    });

    mapOL.addLayer(_vectorLayerOL);

    return () => mapOL.removeLayer(_vectorLayerOL);

  }, [mapOL, url]);

  return null;
};

export default VectorLayerOL;
