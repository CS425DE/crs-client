import axios from "axios";

export default class CustomerService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/customers')
        return response;
    }

    static async deletById(id) {
        const response = await axios.delete('http://localhost:8080/api/car-rental/customers/' + id)
        return response;
    }
    static async update(id, data) {
        const response = await axios.put('http://localhost:8080/api/car-rental/customers/' + id, data)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/customers', data)
        return response;
    }

    static async login(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/customers/login', data)
        return response;
    }
    static async getCustomerById(customerId) {
        const response = await axios.get('http://localhost:8080/api/car-rental/customers/'+customerId)
        return response;
    }
}
