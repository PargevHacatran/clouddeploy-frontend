import type { AuthTabsType } from "./AuthForm";

import { IState } from "@/app/store";

import { Button } from "@/shared/Button";

import { useDispatch, useSelector } from "react-redux";
import { setAuthTabValue } from "@/features/lib/redux/authRoute/authRouteSlice";

type AuthSwitcherTabsType = "signup" | "login";

export const AuthRouteSwitcher = () => {
    const currentTab: AuthTabsType = useSelector((state: IState) => state.authRoute.tab);
    const dispatch = useDispatch();

    const changeCurrentTab = (screenTab: AuthSwitcherTabsType) => dispatch(setAuthTabValue(screenTab));

    return (
        <div className="flex w-full">
            <Button
                className={`${ currentTab === "signup" ? "bg-[var(--color-white)] text-[var(--color-black)]" : "bg-[var(--color-black)] text-[var(--color-white)]" } rounded-[8px] rounded-r-[0px] flex-1 py-[8px] px-[50px] leading-[16px]`}
                onClick={() => changeCurrentTab("signup")}
            >
                Sign Up
            </Button>
            <Button 
                className={`${ currentTab !== "signup" ? "bg-[var(--color-white)] text-[var(--color-black)]" : "bg-[var(--color-black)] text-[var(--color-white)]" } rounded-[8px] rounded-l-[0px] flex-1 py-[8px] px-[50px] leading-[16px]`}
                onClick={() => changeCurrentTab("login")}
            >
                Log In
            </Button>
        </div>
    )
}