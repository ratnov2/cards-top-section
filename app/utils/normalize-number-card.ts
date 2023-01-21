
export const NormalizeNumberCard = (number:string|number)=> number.toString().replace(/\d{4}(?=.)/g, '$& ')
