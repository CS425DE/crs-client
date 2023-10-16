import axios from "axios";

export default class ReportService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/reports');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8080/api/car-rental/reports/' + id)
        return response;
    }

    static async deletById(id) {
        const response = await axios.delete('http://localhost:8080/api/car-rental/reports/' + id)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/reports', data)
        return response;
    }
}
