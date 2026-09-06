import axios from "axios"
import { User } from "../models/User";
// const baseUrl = "http://localhost:8081/ecocheck/api/v1/users";
const baseUrl = "http://localhost:3500/ecocheck/api/v1/users";


const handleToken = () =>{
    const token = localStorage.getItem("ecoCheckCmjd-2026")
    return "Bearer "+token
}

// const saveUser = async (user: any) => {
//     try{
//         const response = await axios.post(
//             baseUrl,
//             user        
//         );
//         return response.status
//     }catch(err){
//        console.error(err)
//     }

    
// }

const getUsers = async () =>{
    try {
        const response = await axios.get<User[]>(
            `${baseUrl}`,
            {
                headers:{
                    Authorization: handleToken()
                }
            }
        
        );
        return response.data
    } catch (err) {
        console.error(err)
    }
}

const updateUser = async (user: any) => {
    try {
        const response = await axios.patch(
            `${baseUrl}/${user.userId}`,
            user
        );
        if(response.status !== 204){
            throw new Error ("Failed to Update the User")
        }
        return response.status
    } catch (err) {
        console.error(err)
    }
}

    const deleteUser = async (userId: string) => {
        try {
            const response = await axios.delete(
                `${baseUrl}/${userId}`
                
            );
            if (response.status !== 204) {
                throw new Error("Failed to Update the User")
            }
            return response.status
        } catch (err) {
            console.error(err)
        }


}

    export default {getUsers, updateUser, deleteUser }