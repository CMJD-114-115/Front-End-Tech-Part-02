import axios
import { User } from "../models/User"
const baseUrl = "http://localhost:8080/ecocheck/api/v1/users";

const saveUser = async (user: any) => {
    console.log("User of the service layer is: ",user)
    
}

export default {saveUser}