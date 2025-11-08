import { Painting } from "../service/artist-login.service";

export class Register {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    username?:string
}

export interface Order {
  id: number;
  painting: Painting;  // nested object here
  quantity: number;
  full_name: string;
  address: string;
  phone: string;
  payment_method: string;
  order_date: string;
  status: string;
}


