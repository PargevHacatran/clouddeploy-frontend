import { IAboutItem } from "../utils/aboutList";
import { icons } from "../utils/icons";

export const AboutListItem = ({ title, description }: IAboutItem) => {
    return (
        <div className="flex gap-x-[20px]">
            <div className="relative mt-[10px] md:w-[17px] md:h-[17px] xl:w-[12px] xl:h-[12px]">
                { icons.checkMark }
            </div>
            <div className="flex flex-col gap-y-[5px]">
                <p className="text-[var(--color-white)] md:text-[20px] xl:text-[17px] xl:leading-[28px] xl:tracking-[-0.2px]">{ title }</p>
                <p className="text-[var(--color-white-60)] md:text-[17px] md:leading-[22px] xl:text-[14px] xl:leading-[20px] xl:tracking-[-0.2px]">{ description }</p>
            </div>
        </div>
    );
}