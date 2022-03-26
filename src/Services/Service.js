import axios from "axios";
const HOST = "https://rent-x-api.herokuapp.com";


const DATA = [
    {
        "_id": "61220730c60e156d5c94157b",
        "empId": "5a1573a0-3a72-491f-96e8-b55daa9997ac",
        "fName": "Uditha",
        "lName": "Wishvajith",
        "gender": "Male",
        "DOB": "1990-06-12T18:30:00.000Z",
        "email": "uwishvajith@gmail.com",
        "maritalStat": "Unmarried",
        "nic": "981235696V",
        "designation": "Automotive Technician",
        "currAdd": "kuruwita, ratnapura",
        "permAdd": "kuruwita, ratnapura",
        "mobileNo": 7111111189,
        "emgContact": 712222223,
        "empPic": "",
        "cv": "",
        "__v": 0
    },
    {
        "_id": "6123dd0e432f602a0435631b",
        "empId": "fd91631d-a048-48cc-b27a-15aaa7824c0d",
        "fName": "devin",
        "lName": "munasinghe",
        "gender": "Male",
        "DOB": "1999-09-14T18:00:00.000Z",
        "email": "devinmunasinghe@gmail.com",
        "maritalStat": "Unmarried",
        "nic": "994504532V",
        "designation": "Service Agent",
        "currAdd": "agalawatta, kalutara",
        "permAdd": "agalawatta, kalutara",
        "mobileNo": 112356458,
        "emgContact": 112356458,
        "empPic": "C:\\fakepath\\01.jpeg",
        "cv": "C:\\fakepath\\03.jpeg",
        "__v": 0
    },
    {
        "_id": "615d90e11365f6002368d941",
        "empId": "281923b6-0311-4e6c-8bc8-faa989b30596",
        "fName": "thisara",
        "lName": "thathsarani",
        "gender": "Female",
        "DOB": "2001-02-04T18:30:00.000Z",
        "email": "user01@gmail.com",
        "maritalStat": "Married",
        "nic": "985361797444",
        "designation": "Driver",
        "currAdd": "44/A",
        "permAdd": "eet,hyhttttt",
        "mobileNo": 703499276,
        "emgContact": 988987654,
        "empPic": "C:\\fakepath\\CV-Thisara.pdf",
        "cv": "C:\\fakepath\\CV-Thisara.pdf",
        "__v": 0
    },
    {
        "_id": "623f115d9da26e0023240106",
        "empId": "94e7fe54-c324-4bca-b21b-3c0b438908ca",
        "fName": "kasun",
        "lName": "madushanka",
        "gender": "Female",
        "DOB": "2001-02-04T18:30:00.000Z",
        "email": "user01@gmail.com",
        "maritalStat": "Married",
        "nic": "98536179V",
        "designation": "Driver",
        "currAdd": "44/A",
        "permAdd": "eet,hyhttttt",
        "mobileNo": 703499276,
        "emgContact": 988987654,
        "empPic": "C:\\fakepath\\CV",
        "cv": "C:\\fakepath\\CV-.pdf",
        "__v": 0
    },
    {
        "_id": "623f3e3887e3c30023decba6",
        "empId": "740fcaac-a9c5-41e2-abd3-ecaf96379739",
        "fName": "kasun",
        "lName": "madushanka",
        "gender": "Male",
        "DOB": "2001-02-04T18:30:00.000Z",
        "email": "user01@gmail.com",
        "maritalStat": "Married",
        "nic": "985361776978V",
        "designation": "Driver",
        "currAdd": "44/A",
        "permAdd": "eet,hyhttttt",
        "mobileNo": 703499276,
        "emgContact": 988987654,
        "empPic": "C:\\fakepath\\CV",
        "cv": "C:\\fakepath\\CV-.pdf",
        "__v": 0
    }
]

export const getAllEmployeesService = async () => {
    try {
        // const response = await axios.get(`${HOST}/api/employee`);
        return {
            ok: true,
            // data: response.data.data,
            data: DATA,
        };
    } catch (error) {
        console.log("error while getting data>>>>", error)
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

export const updateEmployeeService = async (empId, employeePayload) => {
    try {
        await axios.put(`${HOST}/api/updateEmployee/${empId}`, employeePayload);
        return {
            ok: true,
        };
    } catch (error) {
        console.log("error>>>", error)
        // return {
        //     ok: false, err: error.response.data.status
        // };
    }
};