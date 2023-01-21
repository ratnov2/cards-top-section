
export type IOperations = {
  amount:number,
  accountNumber:string
}
export interface IUserCard {
  balance: number,
  accountNumber: string,
  id: string,
  number: number |string,
  expireDate: string,
  cvc: 0,
  paymentSystem: string,
  type: 'primary'| 'secondary',
  bankName: string,
  bankAccountId: string
}

export interface IUserCardAndStyles{
  balance: number,
  accountNumber: string,
  id: string,
  number: number,
  expireDate: string,
  cvc: 0,
  paymentSystem: string,
  type: string,
  bankName: string,
  bankAccountId: string, 
}

