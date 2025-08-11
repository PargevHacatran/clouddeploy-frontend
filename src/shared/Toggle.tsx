import { useRef } from "react";

interface IToggle {
    className?: string;
    onChange: () => void;
    isActive: boolean;
}

const FUNDAMETAL_CLASSNAME = "w-[28px] h-[16px] rounded-[8px] flex items-center p-[1px]";
const ACTIVE_CLASSNAME = "bg-[var(--main-color)] justify-end";
const PASSIVE_CLASSNAME = "bg-[var(--color-grey)] justify-start";

export const Toggle = ({ className, onChange, isActive }: IToggle) => {
    const toggleRef = useRef<HTMLDivElement>(null);
    
    const toggleClassName = `${className ?? ""} ${FUNDAMETAL_CLASSNAME} ${ isActive ? ACTIVE_CLASSNAME : PASSIVE_CLASSNAME }`;
    
    const handleChange = () => {
        onChange();
    }

    return (
        <div 
            className={toggleClassName}
            onClick={() => handleChange()}
            ref={toggleRef}
        >
            <div className="bg-[var(--color-white)] rounded-[50%] w-[14px] h-[14px]"></div>
        </div>
    );
}