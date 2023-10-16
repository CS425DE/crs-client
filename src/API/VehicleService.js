import axios from "axios";

export default class VehicleService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles');
        return response;
    }

    static async getAvailableVehicles() {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles/get-available');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles/' + id)
        return response;
    }

    static async getByModel(model) {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles/getByModel' + model)
        return response;
    }

    static async getByPrice(price) {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles/getByPrice' + price)
        return response;
    }

    static async getByTransmission(transmission) {
        const response = await axios.get('http://localhost:8080/api/car-rental/vehicles/getByTransmission' + transmission)
        return response;
    }

    static async deletById(id) {
        const response = await axios.delete('http://localhost:8080/api/car-rental/vehicles/' + id)
        return response;
    }
    static async update(id, data) {
        const response = await axios.put('http://localhost:8080/api/car-rental/vehicles/' + id, data)
        return response;
    }

    static async create(data) {
        const response = await axios.post('http://localhost:8080/api/car-rental/vehicles', data)
        return response;
    }
}
