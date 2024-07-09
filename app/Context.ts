import { createContext } from 'react';
export interface Data  {
    show?: boolean;
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
interface IContextProps {
    tripData: Data[];
    setData: any;
  }
export const TripDataContext = createContext({} as IContextProps);
