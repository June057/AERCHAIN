import { Button, ButtonSet } from "@carbon/react";
import { useContext, useState } from "react";
import AddTripModal from "./AddTripModal";
import UpdateTripModal from "./UpdateTripModal";
import { SelectedRowContext } from "./Context";

export default function TripActions() {
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const { rowData } = useContext(SelectedRowContext);

  const buttonClass = {
    justifyContent: "end",
    margin: 10,
  };
  return (
    <>
      <ButtonSet style={buttonClass}>
        <Button disabled={!rowData} onClick={() => setUpdateOpen(true)} kind="tertiary">Update Trip</Button>
        <Button onClick={() => setOpen(true)} kind="primary">
          Add Trip
        </Button>
      </ButtonSet>
      {open && <AddTripModal open={open} setOpen={setOpen} />}
      {updateOpen&& <UpdateTripModal open={updateOpen} setOpen={setUpdateOpen} />}
    </>
  );
}
