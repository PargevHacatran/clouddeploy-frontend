import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TabType = "signup" | "login" | "reset" | "code" | "create";

export interface IAuthRouteState {
    tab: TabType;
} 

const initialState = { tab: "signup" } satisfies IAuthRouteState as IAuthRouteState;

const authRouteSlice = createSlice({
    name: "authRoute",
    initialState,
    reducers: {
        setAuthTabValue: (state, action:PayloadAction<TabType>) => {
            state.tab = action.payload;
        }
    }
});

export const { setAuthTabValue } = authRouteSlice.actions;
export default authRouteSlice;