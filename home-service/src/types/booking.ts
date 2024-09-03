import { Business } from "./businesses";

export type Status = "confirmed" | "pending" | "cancelled";

export interface BookingRequest {
  businessId: Business["_id"];
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: Status;
}

export interface Booking extends BookingRequest {
  _id: string;
}
