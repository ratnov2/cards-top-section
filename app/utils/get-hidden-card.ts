export const convertToHiddenNumber = (str:string|number, count = 4) => {
  return '**** **** **** ' + str.toString().slice(-4);
}