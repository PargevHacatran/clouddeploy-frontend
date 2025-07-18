import { HTMLInputTypeAttribute } from "react";

export interface IInput {
    name?: string;
    type?: HTMLInputTypeAttribute
    labelTitle?: React.ReactNode;
    titleClassName?: string;
    areaClassName?: string;
    className: string;
    placeholder: string;
    value: string;
    addictionalStyles?: object;
    maxLength?: number;
    mask?: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement>) => void;  
}

export const Input = ({ name, type, labelTitle, titleClassName, areaClassName, className, placeholder, value, addictionalStyles, maxLength, onChange, onKeyDown }:IInput) => {
    return (
        <label className={className}>
            <span className={titleClassName}>{ labelTitle }</span>
            <input
                type={type}
                className={areaClassName} 
                name={name}
                placeholder={placeholder}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => onKeyDown?.(e)}
                value={value}
                style={addictionalStyles}
                maxLength={maxLength}
            />
        </label>
    )
}
