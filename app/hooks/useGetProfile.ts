
import { ProfileService } from "@/services/profile/profile.service"
import { useQuery } from "@tanstack/react-query"


export const useGetProfile = () =>{
  const {data} = useQuery(['get-user'],()=>ProfileService.getProfile())
  return data?.data
}