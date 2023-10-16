import axios from "axios";

export default class PaymentService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/payments');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8080/api/car-rental/payments/' + id)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/payments', data)
        return response;
    }
}
