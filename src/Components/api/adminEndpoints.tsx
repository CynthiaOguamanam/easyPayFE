import axios from "axios";

// const adminAuth = "http://localhost:2023/admin";
export const live = "https://easypayendpoints.onrender.com/admin";

interface adminData {
  companyname: string;
  companyEmail: string;
  yourName: string;
  password: string;
}
interface iPay {
  number: string;
  amount: number;
  cvv: string;
  expiry_month: string;
  expiry_year: string;
  id: string;
  name: string;
}

interface IPayOut{
  account : string;
  amount : number;
  bank : string;
  id: string;
}

interface login {
  companyEmail: string;
  password: string;
  companyname: string;
}

interface iPay {
  number: string;
  amount: number;
  cvv: string;
  expireMonth: string;
  expireYear: string;
  id: string;
}

export const adminPayIn = async (
  { number, amount, cvv, expiry_month, expiry_year }: iPay,
  id: string
) => {
  return await axios
    .patch(`https://easypayendpoints.onrender.com/pay/pay/${id}`, {
      number,
      amount,
      cvv,
      expiry_month,
      expiry_year,
    })
    .then((res) => res.data);
};
export const adminPayOut = async (
  { amount ,account, 
    bank }: IPayOut,
  id: string
) => {
  return await axios
    .post(`https://easypayendpoints.onrender.com/pay/pay-out/${id}`, {
      amount,
      account, 
      bank
    })
    .then((res) => res.data);
};

export const adminReg = async (data: adminData) => {
  return await axios.post(`${live}/register`, data).then((res) => res.data);
};

export const adminLogin = async ({
  companyEmail,
  password,
  companyname,
}: login) => {
  return await axios
    .post(`${live}/login`, {
      companyEmail,
      password,
      companyname,
    })
    .then((res) => res.data);
};
export const getOneAdmin = async (id: any) => {
  return await axios.get(`${live}/${id}`).then((res) => res.data);
};
