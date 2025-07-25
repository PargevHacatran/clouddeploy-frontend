import { icons } from "@/pages/public/utils/icons";
import { Button } from "@/shared/Button";

export const HelpInformationBar = () => {
    return (
        <div className="p-[30px] h-[350px] rounded-[30px] border-1 border-[var(--color-white-5)] flex flex-col justify-between max-w-[320px]">
            <div>
                <div className="relative w-[18px] h-[18px]">
                    { icons.getSupport }
                </div>
                <div className="flex flex-col gap-y-[17pxs]">
                    <h2 className="font-medium text-[22px] leading-[30px] text-[var(--color-white)]">Get Support</h2>
                    <p className="font-medium text-[17px] leading-[28px] text-[var(--color-white-80)]">Get expert help for your project from our team</p>
                </div>
            </div>
            <Button
                className="font-['Inter'] font-medium text-[14px] text-[#fff] bg-[#333333] rounded-[8px] w-full py-[8px]"
            >
                Получить
            </Button>
        </div>
    );
}
