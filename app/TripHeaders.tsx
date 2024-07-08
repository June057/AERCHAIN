import { useContext } from "react";
import { TripDataContext } from "./Context";

export default function TripHeaders() {
  const { tripData } = useContext(TripDataContext);
  
  const tripHeader = {
    display: "flex",
    justifyContent: "space-around",
    background: "lightgrey",
    marginBottom: 10,
    padding: 10,
  };
  const delivered = [...tripData].filter(
    (row) => row.currenStatus == "Delivered"
  ).length;
  const inTransit = [...tripData].filter(
    (row) => row.currenStatus == "In Transit"
  ).length;

  return (
    <div style={tripHeader}>
      <div>
        Total Trips:{" "}
        <div>
          <b>{tripData.length}</b>
        </div>
      </div>
      <div>
        Delivered:{" "}
        <div>
          <b>{delivered}</b>
        </div>
      </div>
      <div>
        In Transit:{" "}
        <div>
          <b>{inTransit}</b>
        </div>
      </div>
    </div>
  );
}
