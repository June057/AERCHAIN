export const calculateTATStatus = (data) => {
    const tripStartTime = new Date(data.tripStartTime);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const tripEndDate =
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