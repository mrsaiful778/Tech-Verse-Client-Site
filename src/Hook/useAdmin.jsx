import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const myAxios = useAxiosPublic()
    const {data:isAdmin, isPending} = useQuery({
        queryKey: ['redirect', user?.email], 
        enabled: !loading, 
        queryFn: async()=>{
            const result = await myAxios.get(`/users/${user?.email}`)
            return result.data.admin;

        }
    })
    return [isAdmin, isPending]
   
};

export default useAdmin;