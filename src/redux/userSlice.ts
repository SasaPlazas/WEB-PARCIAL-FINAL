import { createSlice } from "@reduxjs/toolkit";


interface UserType {
    user: "member" | "admin"
}

const initialState: UserType = {
    user: 'member'
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ToogleUserType: (state) => {
      state.user =  state.user === "member" ? "member": "admin";
    },
    },
  },
);


export const { ToogleUserType} = AuthSlice.actions;
export default AuthSlice.reducer;