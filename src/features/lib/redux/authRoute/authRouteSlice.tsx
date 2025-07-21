import { AuthTabsType } from "@/widgets/auth/AuthForm";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthRouteState {
    tab: AuthTabsType;
    code: string;
    resetedEmail: string;
} 

const initialState = { 
    tab: "signup", 
    code: "",
    resetedEmail: ""
} satisfies IAuthRouteState as IAuthRouteState;

const authRouteSlice = createSlice({
    name: "authRoute",
    initialState,
    reducers: {
        setAuthTabValue: (state, action:PayloadAction<AuthTabsType>) => {
            state.tab = action.payload;
        },
        setCodeValue: (state, action:PayloadAction<string>) => {
            state.code = action.payload;
        },
        setResetedEmailValue: (state, action:PayloadAction<string>) => {
            state.resetedEmail = action.payload;
        }
    }
});

export const { setAuthTabValue, setCodeValue, setResetedEmailValue } = authRouteSlice.actions;
export default authRouteSlice;