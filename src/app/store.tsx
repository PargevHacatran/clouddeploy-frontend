import authRouteSlice, { IAuthRouteState } from "@/features/lib/redux/authRoute/authRouteSlice";
import { configureStore } from "@reduxjs/toolkit";

export interface IState {
    [authRouteSlice.name]: IAuthRouteState;
}

export const makeStore = () => {
    return configureStore({
        reducer: {
            [authRouteSlice.name]: authRouteSlice.reducer 
        }
    })
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];