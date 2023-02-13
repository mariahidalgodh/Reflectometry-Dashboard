import "./Filters.css";
import "react-widgets/styles.css";

import {Combobox} from "react-widgets/cjs";
import {useDispatch, useSelector} from "react-redux";
import {setDate, setSatellite} from "./filtersSlide";

const FiltersReflectivity = () => {

  const dispatch = useDispatch();
  const dateSelected = useSelector(state => state.query.date);
  const satelliteSelected = useSelector(state => state.query.PRN);

  const dates = [20190712, 20190715, 20190717, 20190719];
  const satellites = [1, 7, 8, 10, 11, 16, 18, 27, 30];

  let dateOnChange = (date) => {
    return dispatch(setDate(date));
  };

  let satelliteOnChange = (satellite) => {
    return dispatch(setSatellite(satellite));
  };

  return (
    <div id="filter" className="filter">
      <div className="inline">
        <div>Date</div>
        <Combobox
          data={dates}
          onChange={dateOnChange}
          defaultValue={dateSelected}
        />
      </div>
      <div className="inline">
        <div>Satellite</div>
        <Combobox
          data={satellites}
          onChange={satelliteOnChange}
          defaultValue={satelliteSelected}
        />
      </div>
    </div>
  )
}

export default FiltersReflectivity;
