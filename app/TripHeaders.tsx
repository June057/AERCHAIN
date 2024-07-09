import { useContext, useEffect, useState } from "react";
import { TripDataContext } from "./Context";
import { Column, Grid, Tab, TabList, Tabs } from "@carbon/react";

export default function TripHeaders({}) {
  const { tripData, setData } = useContext(TripDataContext);

  const tripHeader = {
    background: "lightgrey",
    marginBottom: 10,
    padding: 10,
  };
  // plain calculation on status count
  const delivered = [...tripData].filter(
    (row) => row.currenStatus == "Delivered"
  ).length;
  const inTransit = [...tripData].filter(
    (row) => row.currenStatus == "In Transit"
  ).length;
  const delayed = [...tripData].filter(
    (row) => row.TATStatus == "Delayed"
  ).length;
  const statusList = [
    {
      name: "Total Trips:",
      value: tripData.length,
      key: "totalTrips",
    },
    {
      name: "Delivered:",
      value: delivered,
      key: "Delivered",
    },
    {
      name: "Delayed:",
      value: delayed,
      key: "Delayed",
    },
    {
      name: "In Transit:",
      value: inTransit,
      key: "In Transit",
    },
  ];
  const handleFilterData = (status) => {
    if (status === "totalTrips")
      return setData((data) =>
        data.map((trip) => {
          trip.show = true;
          return trip;
        })
      );

    setData((prevData) => {
      if (status === "Delayed")
        return [...tripData].map((trip) => {
          if (trip.TATStatus === status) trip.show = true;
          else trip.show = false;
          return trip;
        });
      else
        return [...tripData].map((trip) => {
          if (trip.currenStatus === status) trip.show = true;
          else trip.show = false;
          return trip;
        });
    });
  };

  return (
    <div style={tripHeader}>
      <Grid condensed>
        <Column lg={10}>
          <Tabs>
          {/* @ts-ignore */}
            <TabList aria-label="List of tabs" contained fullWidth>
              {statusList.map((status, index) => {
                return (
                  <Tab onClick={() => handleFilterData(status.key)} key={index}>
                    {" "}
                    {status.name}{" "}
                    <div>
                      <b>{status.value}</b>
                    </div>
                  </Tab>
                );
              })}
            </TabList>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
}
