import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface loginClient {
  email: string;
  password: string;
}

interface userData {
  yourName: string;
  email: string;
  password: string;
  companyname: string;
  position: string;
  _id: string;
  balance:number
  walletNumber:number
}

interface loginAdmin {
  email: string;
  password: string;
}

interface adminData {
  walletNumber:number
  companyname: string;
  companyEmail: string;
  yourName: string;
  password: string;
    _id: string;
    companyCode:string;
    balance:number
}



const initialState = {
  Client: {} as userData | null,
  Admin: {} as adminData | null,
};

const ReduxState = createSlice({
  name: "easyPay",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },

    registerAdmin: (state, { payload }: PayloadAction<adminData>) => {
      state.Admin = payload;
    },
    logOut: (state) => {
      state.Client = null;
    },
    logoutAdmin: (state) => {
      state.Admin = null;
    },

    
  }
});

export const { registerClient, registerAdmin, logOut, logoutAdmin } =
  ReduxState.actions;

export default ReduxState.reducer;
