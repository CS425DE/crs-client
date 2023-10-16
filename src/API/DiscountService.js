import axios from "axios";

export default class DiscountService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/discounts');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8080/api/car-rental/discounts/' + id)
        return response;
    }

    static async deletById(id) {
        const response = await axios.delete('http://localhost:8080/api/car-rental/discounts/' + id)
        return response;
    }
    static async update(id, data) {
        const response = await axios.put('http://localhost:8080/api/car-rental/discounts/' + id, data)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/discounts', data)
        return response;
    }
}
