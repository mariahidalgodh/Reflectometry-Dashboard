import {createSlice} from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "query",
  initialState: {
    date: "20190712",
    PRN: 1
  },
  reducers: {
    setSatellite: (state, data) => {
      return {...state, PRN: data.payload}
    },
    setDate: (state, data) => {
      return {...state, date: data.payload}
    }
  }
})

export const { setSatellite, setDate } = filtersSlice.actions

export default filtersSlice.reducer