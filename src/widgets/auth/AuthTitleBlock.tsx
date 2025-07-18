import { authTitleList } from "@/pages/auth/utils/authTitleList";

import type { AuthTabsType } from "@/widgets/auth/AuthForm";

import { IState } from "@/app/store";

import { useSelector } from "react-redux";

type AuthTitleListType = typeof authTitleList;

export const AuthTitleBlock = () => {
    const currentTab: AuthTabsType | "default"  = useSelector((state: IState) => state.authRoute.tab);

    const currentTitle = authTitleList[currentTab as keyof AuthTitleListType].title ?? authTitleList["default"].title;
    const currentDesciption = authTitleList[currentTab as keyof AuthTitleListType].description ?? authTitleList["default"].description;

    return (
        <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-[var(--color-white)] text-[46px] tracking-[-2px] leading-[48px] font-medium text-center">{ currentTitle }</h1>
            <p className="leading-[30px] text-[17px] tracking-[-0.2px] text-[var(--color-white-60)] text-center whitespace-pre-line">{ currentDesciption }</p>
        </div>
    );
}