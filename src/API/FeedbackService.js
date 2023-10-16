import axios from "axios";

export default class FeedbackService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/feedbacks');
        return response;
    }

    static async getByCustomerId(customerId) {
        const response = await axios.get('http://localhost:8080/api/car-rental/feedbacks/getByCustomer/' + customerId)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/feedbacks', data)
        return response;
    }
}
