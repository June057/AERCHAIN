"use client";
import Trips from "./Trips";
import { useState, createContext, useEffect } from "react";
import { calculateTATStatus } from "./calcTATStatus";
import data from "./data.json";
import TripHeaders from "./TripHeaders";
import TripActions from "./TripActions";
import { TripDataContext } from "./Context";

interface Data  {
  _id: string;
  id?: string;
  TATStatus?:string;
  tripId: string;
  transporter: string;
  tripStartTime: string;
  currentStatusCode: string;
  currenStatus: string;
  phoneNumber: number;
  etaDays: number;
  distanceRemaining: number;
  tripEndTime: string;
  createdAt: string;
}


export default function Home() {
  const [tripData, setData] = useState<Data[]>([]);

  // setting the data in state so can be used through context in other components
  //TATStatus is added here
  useEffect(() => {
    const rows = data.data.map((data:Data) => {
      data.id = data.tripId;
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
