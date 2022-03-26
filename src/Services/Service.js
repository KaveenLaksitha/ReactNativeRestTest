import axios from "axios";
const HOST = "https://rent-x-api.herokuapp.com";

export const getAllEmployeesService = async () => {
    try {
        const response = await axios.get(`${HOST}/api/employee`);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
};

export const deleteEmployeeService = async (data) => {

    try {
        const response = await axios.post(`${HOST}/api/removeEmployee`, data);
        if (response) {
            return {
                ok: true,
            };
        }
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }

};

export const updateEmployeeService = async (empId, payload) => {
    console.log("payload>>", payload)
    try {
        await axios.put(`${HOST}/api/updateEmployee/${empId}`, employeePayload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};