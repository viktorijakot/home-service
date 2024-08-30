import { Business } from './businesses';

export type Status = 'confirmed' | 'pending' | 'cancelled';

export interface BookingRequest {
  businessId: Business['_id'];
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: Status;
}

export interface Booking {
  _id: string;
  businessId: string;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: Status;
}
