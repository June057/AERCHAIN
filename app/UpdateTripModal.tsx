import {
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
  // ts support for some component not availble in lib so ignoring rules here
  // @ts-ignore
  Select,
  // @ts-ignore
  SelectItem,
} from "@carbon/react";
import { useState, useContext } from "react";
import { SelectedRowContext, TripDataContext } from "./Context";

const defaultDummyData = {
  id: new Date(),
  tripId: "06e84e43-e81a-4e16-9d7c-fa407e214fa4",
  transporter: "DHL",
  tripStartTime: "2024-02-08T02:49:09Z",
  currentStatusCode: "BKD",
  currenStatus: "Booked",
  phoneNumber: 8483451114,
  etaDays: 2,
  distanceRemaining: 925,
  tripEndTime: "",
  source: "Jodhpur",
  sourceLatitude: 33.4,
  sourceLongitude: 90.8,
  dest: "Prayagraj",
  destLatitude: 31.9,
  show: true,
  destLongitude: 90,
  lastPingTime: "2024-02-10T02:49:09.000Z",
  createdAt: "2024-02-07T02:49:09.000Z",
};
export default function UpdateTripModal({ open, setOpen }) {
  const modalClass = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 10,
  };
  const { rowData } = useContext(SelectedRowContext);

  const [formData, setFormData] = useState({
    currenStatus: rowData.currenStatus,
    lastPingTime: rowData.lastPingTime,
  });
  const [formStatus, setStatus] = useState(false);

  const { setData } = useContext(TripDataContext);

  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = () => {
    setData((prevData) => {
      const newData = [...prevData].map((data) => {
        if (data.id == rowData.id) data = { ...data, ...formData };
        return data;
      });
      return newData;
    });
    setOpen(false);
  };

  return (
    <ComposedModal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      //   launcherButtonRef={button}
    >
      <ModalHeader title="Update Trip" />
      <ModalBody>
        <div style={modalClass}>
          <Select
            name="currenStatus"
            onChange={handleFormChange}
            id="select-1"
            defaultValue="us-south"
            labelText="Status"
            warn={formStatus}
            value={formData.currenStatus}
          >
            <SelectItem value="Delivered" text="Delivered" />
            <SelectItem value="In Transit" text="In Transit" />
            <SelectItem
              value="Reached Destination"
              text="Reached Destination"
            />
          </Select>
        </div>
        <div style={modalClass}>
          <TextInput
            data-modal-primary-focus
            onChange={handleFormChange}
            name="lastPingTime"
            id="text-input-1"
            type="Date"
            labelText="Status Time"
            warn={formStatus}
            value={formData.lastPingTime}
            style={{
              marginBottom: "1rem",
            }}
          />
        </div>
      </ModalBody>
      {/* @ts-ignore */}
      <ModalFooter
        onRequestClose={() => {
          setOpen(false);
        }}
        onRequestSubmit={() => {
          Object.keys(formData).length === 0 ? setStatus(true) : handleSubmit();
        }}
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
      ></ModalFooter>
    </ComposedModal>
  );
}
