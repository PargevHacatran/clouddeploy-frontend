import { IStack } from "../utils/possibilitiesList";

export const PossibilitiesStackItem = ({ icon, title }:IStack) => {
    return (
        <div className="flex gap-x-[15px] items-center py-[12px] px-[20px] text-[var(--color-white-40)] border-1 border-[var(--color-white-5)] max-w-fit rounded-[8px] hover:border-[var(--color-white-80)] hover:text-[var(--color-white-80)] hover:cursor-pointer stack-hover">
            
            <div className="relative w-[17px] h-[17px]">
                { icon }
            </div>
            
            <p className="text-[17px]">{ title }</p>
        </div>
    );
}