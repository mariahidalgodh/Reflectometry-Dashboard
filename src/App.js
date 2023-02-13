import './App.css';
import MapOL from "./Map/MapOL";
import VectorLayerOL from "./Layers/VectorLayerOL";
import LayersOL from "./Layers/LayersOL";
import reflectivityGeojson from "./data/reflectivity_points.geojson";
import FiltersReflectivity from "./Filters/Filters";


function App() {

  return (
    <div className="App">
      <MapOL>
        <LayersOL>
          <VectorLayerOL url={reflectivityGeojson}/>
        </LayersOL>
        <FiltersReflectivity></FiltersReflectivity>
      </MapOL>
    </div>
  );
}

export default App;
