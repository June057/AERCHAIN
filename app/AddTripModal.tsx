import {
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
import { useState, useContext } from "react";
import { TripDataContext } from "./page";
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
  destLongitude: 90,
  lastPingTime: "2024-02-10T02:49:09.000Z",
  createdAt: "2024-02-07T02:49:09.000Z",
};
export default function AddTripModal({ open, setOpen }) {
  const modalClass = { display: "flex", justifyContent: "space-around" };
  const [formData, setFormData] = useState({});
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
      return [...prevData, { ...defaultDummyData, ...formData }];
    });
    setOpen(false);
  };

  return (
    <ComposedModal
      open={open}
      onClose={() => {
        setOpen(false);
        setFormData({});
      }}
      //   launcherButtonRef={button}
    >
      <ModalHeader title="Add Trip" />
      <ModalBody>
        <div style={modalClass}>
          <TextInput
            data-modal-primary-focus
            onChange={handleFormChange}
            id="text-input-1"
            name="tripId"
            warn={formStatus}
            labelText="Trip ID"
            style={{
              marginBottom: "1rem",
            }}
          />
          <Select
            name="dest"
            onChange={handleFormChange}
            id="select-1"
            defaultValue="us-south"
            labelText="Destination"
            warn={formStatus}
          >
            <SelectItem value="bluedart" text="Blue dart" />
            <SelectItem value="dtdc" text="DTDC" />
            <SelectItem value="delhivery" text="Delhivery" />
            <SelectItem value="merks" text="Merks" />
          </Select>
        </div>
        <div style={modalClass}>
          <TextInput
            data-modal-primary-focus
            onChange={handleFormChange}
            name="source"
            id="text-input-1"
            labelText="Source"
            warn={formStatus}
            style={{
              marginBottom: "1rem",
            }}
          />
          <Select
            name="transporter"
            onChange={handleFormChange}
            id="select-1"
            defaultValue="us-south"
            labelText="Transporter"
            warn={formStatus}
          >
            <SelectItem value="bluedart" text="Blue dart" />
            <SelectItem value="dtdc" text="DTDC" />
            <SelectItem value="delhivery" text="Delhivery" />
            <SelectItem value="merks" text="Merks" />
          </Select>
        </div>

        <TextInput
          data-modal-primary-focus
          onChange={handleFormChange}
          id="text-input-1"
          name="phoneNumber"
          labelText="Phone"
          type="number"
          warn={formStatus}
          style={{
            marginBottom: "1rem",
          }}
        />
      </ModalBody>
      <ModalFooter
        onRequestClose={() => {
          setFormData({}), setOpen(false);
        }}
        onRequestSubmit={() => {
          Object.keys(formData).length === 0 ? setStatus(true) : handleSubmit();
        }}
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
      />
    </ComposedModal>
  );
}
