import type { AuthTabsType } from "@/widgets/auth/AuthForm";
import type { PasswordInputType } from "@/shared/PasswordInput";

import { IAuthCode } from "@/pages/auth/ui/AuthCode";
import { IInput } from "@/shared/Input";

import { AuthValuesInterfaces } from "@/pages/auth/utils/authForm";

import { PasswordInput } from "@/shared/PasswordInput";
import { Input } from "@/shared/Input";
import { AuthCode } from "@/pages/auth/ui/AuthCode";

import Validation from "@/proccesses/auth/Validation";

type ValidationStrategiesType = {
    [key in AuthTabsType]: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => void;
}

export type RenderFieldsStrategiesType = {
    password: (props:PasswordInputType) => React.ReactElement;
    code: (props:IAuthCode) => React.ReactElement;
    input: (props:IInput) => React.ReactElement;
}

const validation = new Validation();

export const validationStrategies: ValidationStrategiesType = {
    signup: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => {
        if ("email" in values && "name" && "lastName" in values && "username" in values && "jobTitle" && "phone" && "password") {
            errors["email"] = validation.emailValidation(values.email) as string;
            errors["name"] = validation.namesValidation(values.name) as string;
            errors["lastName"] = validation.namesValidation(values.lastName) as string;
            errors["username"] = validation.usernameValidation(values.username) as string;
            errors["jobTitle"] = validation.namesValidation(values.jobTitle) as string;
            errors["phone"] = validation.phoneValidation(values.phone) as string;
            errors["password"] = validation.passwordValidation(values.password) as string;
        
            return errors;
        }
    },
    login: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => {
        if ("login" in values && "password" in values) {
            errors["login"] = validation.emailValidation(values.login) as string;
            errors["password"] = validation.passwordValidation(values.password) as string;
        
            return errors;
        }
    },
    reset: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => {
        if ("login" in values) {
            errors["login"] = validation.emailValidation(values.login) as string;
        
            return errors;
        }
    },
    code: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => {},
    create: (values: typeof AuthValuesInterfaces[AuthTabsType], errors: Record<string, string>) => {
         if ("newPassword" in values && "confirmPassword" in values) {
            errors["newPassword"] = validation.passwordValidation(values.newPassword) as string;
            errors["confirmPassword"] = validation.passwordValidation(values.confirmPassword) as string;
        
            return errors;
        }
    } 
};

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
    input: ({ name, type, labelTitle, placeholder, onChange, titleClassName, areaClassName, className, value, addictionalStyles }: IInput) => (
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
        />
    ) as React.ReactElement
};