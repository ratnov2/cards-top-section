
export const convertMoneyToNormalize = (n:string|number)=>parseFloat(String(n)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
