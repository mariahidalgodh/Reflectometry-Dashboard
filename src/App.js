import './App.css';
import MapOL from "./Map/MapOL";
import VectorLayerOL from "./Layers/VectorLayerOL";
import LayersOL from "./Layers/LayersOL";
import reflectivityGeojson from "./data/reflectivity_points.geojson";

function App() {
  return (
    <div className="App">
      <MapOL>
        <LayersOL>
          <VectorLayerOL url={reflectivityGeojson}/>
        </LayersOL>
      </MapOL>
    </div>
  );
}

export default App;
