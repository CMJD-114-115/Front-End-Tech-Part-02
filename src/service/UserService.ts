import axios from "axios"
import { User } from "../models/User";
const baseUrl = "http://localhost:8080/ecocheck/api/v1/users";

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

export default {saveUser}