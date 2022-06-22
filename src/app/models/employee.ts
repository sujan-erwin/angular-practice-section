
export interface IEmployee {
  id: number;
  name: string;
  age: number;
  presentAddress: IAddress;
  permenantAddress: IAddress;
}

export interface IAddress {
  houseNo: string;
  street: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: number;

}
