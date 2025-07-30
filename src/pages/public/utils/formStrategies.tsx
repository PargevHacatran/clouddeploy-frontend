import type { PasswordInputType } from "@/shared/PasswordInput";

import { IAuthCode } from "@/pages/auth/ui/AuthCode";
import { IInput } from "@/shared/Input";

import { PasswordInput } from "@/shared/PasswordInput";
import { Input } from "@/shared/Input";
import { AuthCode } from "@/pages/auth/ui/AuthCode";

export type RenderFieldsStrategiesType = {
    password: (props:PasswordInputType) => React.ReactElement;
    code: (props:IAuthCode) => React.ReactElement;
    input: (props:IInput) => React.ReactElement;
}

export const renderFieldsStrategies:RenderFieldsStrategiesType = {
    password: ({ name, type, labelTitle, placeholder, onChange, titleClassName, areaClassName, className, value, addictionalStyles, visiblePassword }: PasswordInputType) => (
        <PasswordInput
            name={name}
            type={type}
            labelTitle={labelTitle}
            titleClassName={titleClassName}
            areaClassName={areaClassName}
            placeholder={placeholder}
            onChange={onChange}
            visiblePassword={visiblePassword}
            className={className}
            value={value}
            addictionalStyles={addictionalStyles}
        />
    ) as React.ReactElement,
    code: ({ name, value, addictionalStyles, onChange }: IAuthCode) => (
        <AuthCode
            name={name}
            value={value}
            addictionalStyles={addictionalStyles}
            onChange={onChange}
        />
    ) as React.ReactElement,
    input: ({ name, type, labelTitle, placeholder, onChange, titleClassName, areaClassName, className, value, addictionalStyles, isMultiline }: IInput) => (
        <Input
            name={name}
            type={type}
            labelTitle={labelTitle}
            titleClassName={titleClassName}
            areaClassName={areaClassName}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
            value={value}
            addictionalStyles={addictionalStyles}
            isMultiline={isMultiline}
        />
    ) as React.ReactElement
};