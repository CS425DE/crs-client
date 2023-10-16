import axios from "axios";

export default class AdminService {
    static async login(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/admin/login', data)
        return response;
    }
}