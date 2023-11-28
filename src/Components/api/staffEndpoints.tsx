import axios from "axios";

// const staffAuth = "http://localhost:2023/staff";
export const live = "https://easypayendpoints.onrender.com/staff"

export interface staffData {
  companyname: string;
  email: string;
  yourName: string;
  password: string;
  position: string;
  _id : string
}

// interface adminData {
//   companyName: string;
//   companyEmail: string;
//   yourName: string;
//   password: string;
//     _id: string;
// }


export interface login {
  email: string;
  companyname: string;
  password: string;
}

export const staffReg = async (data:staffData
 ) => {
  return await axios
    .post(`${live}/staffregister`, data)
    .then((res) => res.data);
};

export const loginClient = async ({ email, companyname, password }: login) => {
  return await axios
    .post(`${live}/stafflogin`, { email, companyname, password })
    .then((res) => res.data);
};

export const getAllClients = async () => {
  return await axios.get(`${live}/allstaff`).then((res) => res.data);
};


export const getOneStaff = async(id:any) =>{
  return await axios.get(`${live}/staff/${id}`).then((res) => res.data);
  }


//create plans

export const live1 = "https://easypayendpoints.onrender.com/plans"
export const live2 = "https://easypayendpoints.onrender.com/pay"

export const createHousePlan = async(id:any , data:any)=>{
  return await axios.post(`${live1}/houseplan${id}` , data).then((res)=> res.data)
}