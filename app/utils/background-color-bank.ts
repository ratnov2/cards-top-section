import { tailwindColors } from "./tailwind-colors"

export const BackgroundColorBank = (bank:string) =>{
  const bankLowerCase = bank.toLowerCase() 
  switch (bankLowerCase){
    case 'red bank': return tailwindColors.purple
    case 'mir' : return tailwindColors.green
    case 'hsbc' : return tailwindColors.orange
    case 'visa' : return tailwindColors.red
    default : return tailwindColors.green
  }
}