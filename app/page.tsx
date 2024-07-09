"use client";
import Trips from "./Trips";
import { useState, createContext, useEffect } from "react";
import { calculateTATStatus } from "./calcTATStatus";
import data from "./data.json";
import TripHeaders from "./TripHeaders";
import TripActions from "./TripActions";
import { TripDataContext } from "./Context";
import { Data } from "./Context";

export default function Home() {
  const [tripData, setData] = useState<Data[]>([]);
  // const [filteredData, setFilteredData] = useState<Data[]>([]);

  // setting the data in state so can be used through context in other components
  //TATStatus is added here
  useEffect(() => {
    const rows = data.data.map((data:Data) => {
      data.id = data.tripId;
      data.show= true;
      data.TATStatus = calculateTATStatus(data);
      return data;
    });
    setData(rows);
  }, []);
  return (
    //to avail the tripdata across components
    <TripDataContext.Provider value={{ tripData, setData }}>
      <div>
        <TripHeaders/>
        <TripActions/>
        <Trips />
      </div>
    </TripDataContext.Provider>
  );
}
