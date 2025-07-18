import { IState } from "@/app/store";
import { GitSystemButton } from "@/pages/auth/ui/GitSystemButton"
import { gitSystemsButtons } from "@/pages/auth/utils/gitSystemsButtons"
import { useSelector } from "react-redux";

export const AlternativeSignUoRoute = () => {
    const currentTab = useSelector((state:IState) => state.authRoute.tab);

    if (currentTab === "signup"|| currentTab === "login") {
        return (
            <div className="flex w-[540px] flex-col">
                <div className="flex flex-1 items-center mb-[20px]">
                    <div className="bg-[var(--color-white-40)] flex-1 h-[1px]"></div>
                    <p className="text-[var(--color-white-40)] p-[15px]">or sign up with</p>
                    <div className="bg-[var(--color-white-40)] flex-1 h-[1px]"></div>
                </div>

                <div className="flex flex-1 flex-col gap-y-[10px]">
                    {
                        gitSystemsButtons.map((gitSystemItem, index) => (
                            <GitSystemButton
                                key={index}
                                text={gitSystemItem.text}
                                icon={gitSystemItem.icon}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}