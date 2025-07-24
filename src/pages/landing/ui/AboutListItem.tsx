import { IAboutItem } from "../utils/aboutList";
import { icons } from "../utils/icons";

export const AboutListItem = ({ title, description }: IAboutItem) => {
    return (
        <div className="flex gap-x-[20px]">
            <div className="relative w-[12px] h-[12px] mt-[10px]">
                { icons.checkMark }
            </div>
            <div className="flex flex-col gap-y-[5px]">
                <p className="text-[17px] leading-[28px] tracking-[-0.2px] text-[var(--color-white)]">{ title }</p>
                <p className="text-[14px] leading-[20px] tracking-[-0.2px] text-[var(--color-white-60)]">{ description }</p>
            </div>
        </div>
    );
}