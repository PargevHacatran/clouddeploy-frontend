import { ButtonHTMLAttributes, MouseEvent } from "react";

interface IButton {
    className: string;
    children: React.ReactNode;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    disabled?: boolean;
    onClick?: (e:MouseEvent) => void;
}

export const Button = ({ className, children, type, disabled, onClick }:IButton) => {
    return (
        <button 
            type={type ?? "button"}
            disabled={disabled}
            className={className}
            onClick={(e:MouseEvent<HTMLButtonElement>) => onClick?.(e)}
        >
            { children }
        </button>
    )
}