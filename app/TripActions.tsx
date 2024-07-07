import { Button, ButtonSet } from "@carbon/react";
import { useState } from "react";
import AddTripModal from "./AddTripModal";

export default function TripActions() {
  const [open, setOpen] = useState(false);

  const buttonClass = {
    justifyContent: "end",
    margin: 10,
  };
  return (
    <>
    <ButtonSet style={buttonClass}>
      <Button disabled kind="tertiary" >
          Update Trip
        </Button>
      <Button onClick={()=>setOpen(true)} kind="primary">
        Add Trip
      </Button>
    </ButtonSet>
    {
        open && <AddTripModal open={open} setOpen={setOpen}/>
    }
    </>
  );
}
