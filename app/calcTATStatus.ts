export const calculateTATStatus = (data) => {
  const tripStartTime:any = new Date(data.tripStartTime);
  // calculatin trip end days from start and end date
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const tripEndDate:any =
    data.tripEndTime === ""
      ? new Date(data.lastPingTime)
      : new Date(data.tripEndTime);
  const tripEndDays = Math.round(
    Math.abs((tripEndDate - tripStartTime) / oneDay)
  );
  if (data.etaDays >= tripEndDays) data.TATStatus = "Delayed";
  else if (data.etaDays <= tripEndDays) data.TATStatus = "OnTime";
  else data.TATStatus = "Others";
  return data.TATStatus;
};
