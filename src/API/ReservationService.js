import axios from "axios";

export default class ReservationService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/reservations');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8080/api/car-rental/reservations/' + id)
        return response;
    }

    static async getAllByCustomerId(customerId) {
        const response = await axios.get('http://localhost:8080/api/car-rental/reservations/getByCustomer/' + customerId)
        return response;
    }

    static async deletById(id) {
        const response = await axios.delete('http://localhost:8080/api/car-rental/reservations/' + id)
        return response;
    }
    static async update(id, data) {
        const response = await axios.put('http://localhost:8080/api/car-rental/reservations/' + id, data)
        return response;
    }

    static async cancel(id) {
        const response = await axios.post('http://localhost:8080/api/car-rental/reservations/cancel' + id,)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/reservations', data)
        return response;
    }
}
