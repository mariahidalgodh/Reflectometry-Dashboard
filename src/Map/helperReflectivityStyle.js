import {Circle, Fill, Style} from "ol/style";

const MIN_VALUE_LEGEND = -35
const MAX_VALUE_LEGEND = 35
const CUSTOM_COLOR_SCALE_LEGEND = [
  {color: "#FFEA2C", label: MIN_VALUE_LEGEND, normal: 0},
  {color: "#FFD528", label: "", normal: 0.1},
  {color: "#FFBF24", label: "", normal: 0.2},
  {color: "#FFAA20", label: "", normal: 0.3},
  {color: "#FF951C", label: "", normal: 0.4},
  {color: "#FF8018", label: "", normal: 0.5},
  {color: "#FF6A14", label: "", normal: 0.6},
  {color: "#FF5510", label: "", normal: 0.7},
  {color: "#FF400C", label: "", normal: 0.8},
  {color: "#FF2B08", label: "", normal: 0.9},
  {color: "#FF0000", label: MAX_VALUE_LEGEND, normal: 1.0},
]


const queryReflectivityStyle = (query) => {

  const reflectivityStyleByFeature = (feature) => {
    if (!feature) return
    const featureDate = feature.get("date");
    const featureSatellite = feature.get("PRN");

    const isFeatureOfSelectedDate = featureDate && query.date && query.date == featureDate
    const isFeatureOfSelectedSatellite = featureSatellite && query.PRN && query.PRN == featureSatellite

    if (isFeatureOfSelectedDate && isFeatureOfSelectedSatellite) {

      const _data = feature.get("ss_loss");
      const _normalizedData = (_data - MIN_VALUE_LEGEND) / (MAX_VALUE_LEGEND - MIN_VALUE_LEGEND);
      const _pointSize = (1 - _normalizedData) * 10;
      const selectItemColor = CUSTOM_COLOR_SCALE_LEGEND.find(item => (_normalizedData <= item.normal))
      const _pointFill = new Fill({
        color: selectItemColor.color
      });

      const _pointStyle = new Circle({
        radius: _pointSize,
        fill: _pointFill
      });

      let _styleOL = new Style({
        image: _pointStyle
      });
      return _styleOL;
    }
    return null;
  }

  return reflectivityStyleByFeature;
}

export default queryReflectivityStyle;
