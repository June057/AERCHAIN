"use client";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectRow,
  TableSelectAll,
} from "@carbon/react";
import { useContext } from "react";
import { SelectedRowContext, TripDataContext } from "./Context";

const headers = [
  {
    key: "tripId",
    header: "Trip id",
  },
  {
    key: "transporter",
    header: "Transporter",
  },
  {
    key: "source",
    header: "Source",
  },
  {
    key: "dest",
    header: "Destination",
  },
  {
    key: "phoneNumber",
    header: "Phone",
  },
  {
    key: "etaDays",
    header: "ETA",
  },
  {
    key: "distanceRemaining",
    header: "Distance Remaining",
  },
  {
    key: "currenStatus",
    header: "Trip Status",
  },
  {
    key: "TATStatus",
    header: "TAT Status",
  },
];

export default function Trips() {
  const { tripData } = useContext(TripDataContext);
  const { setRowData } = useContext(SelectedRowContext);

  return (
    <DataTable
      rows={[...tripData].filter((trip) => trip.show === true)}
      headers={headers}
      isSortable
      radio={false}
    >
      {({
        rows,
        headers,
        getTableProps,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
      }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableSelectAll
                {...getSelectionProps({
                  rows,
                  //  onClick: () => setRowData(row),
                })}
              />
              {headers.map((header, index) => (
                <TableHeader {...getHeaderProps({ header })} key={index}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow {...getRowProps({ row })} key={index}>
                <TableSelectRow
                  {...getSelectionProps({
                    row,
                  onClick: () => setRowData(tripData.find((data)=>data.id==row.id)),
                  })}
                />
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  );
}
