import axios from "axios"
import { User } from "../models/User";
const baseUrl = "http://localhost:8081/ecocheck/api/v1/users";

const saveUser = async (user: any) => {
    try{
        const response = await axios.post(
            baseUrl,
            user        
        );
        return response.status
    }catch(err){
       console.error(err)
    }

    
}

const getUsers = async () =>{
    try {
        const response = await axios.get(baseUrl);
        return response.data
    } catch (err) {
        console.error(err)
    }
}

export default { saveUser, getUsers}