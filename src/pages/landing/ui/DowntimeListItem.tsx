import { icons } from "../utils/icons";

interface IDowntimeListItem {
    text: string;
}

export const DowntimeListItem = ({ text }:IDowntimeListItem) => {
    return (
        <li className="flex items-center gap-x-[15px]">
            <div className="relative w-[12px] h-[12px]">
                { icons.checkMark }
            </div>

            <span className="text-[var(--color-white)] text-[17px] leading-[28px] tracking-[-0.2px]">{ text }</span>
        </li>
    );
}