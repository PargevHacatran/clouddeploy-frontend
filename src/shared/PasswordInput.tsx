"use client";

import { useState } from "react"
import { Button } from "./Button"
import { Input, IInput } from "./Input"
import { icons } from "@/pages/auth/utils/icons"

interface IPasswordInput {
    visiblePassword: string;
}

export type PasswordInputType = IInput & IPasswordInput;

export const PasswordInput = ({ name, labelTitle, titleClassName, areaClassName, className, placeholder, value, addictionalStyles, visiblePassword, onChange }:PasswordInputType) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="flex-1 flex flex-col gap-y-[10px]">
            <span className={titleClassName}>{ labelTitle }</span>
            <div 
                className={areaClassName}
                style={addictionalStyles}
            >
                <Input
                    type={isVisible ? "text" : "password"} 
                    name={name}
                    className={className}
                    areaClassName="flex-1 outline-none text-[var(--color-white-40)]"
                    placeholder={isVisible ? visiblePassword ?? placeholder : placeholder }
                    value={value}
                    onChange={onChange}
                />
                <Button
                    onClick={() => setIsVisible(!isVisible)}
                    className="relative w-[22px] h-[17px]"
                    type="button"
                >
                    { isVisible ? icons.visiblePassword : icons.hiddenPassword }
                </Button>
            </div>
        </div>
    )
}