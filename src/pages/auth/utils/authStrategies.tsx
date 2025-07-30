import type { AuthTabsType } from "@/widgets/auth/AuthForm";

import { AuthValuesInterfaces } from "@/pages/auth/utils/authForm";

import Validation from "@/proccesses/Validation";
import AuthRequests from "@/proccesses/auth/AuthRequests";

interface ICodeResponse {
    code: string;
    status: string;
    message: string;
}

type AuthFormValues = {
    [key in AuthTabsType]: typeof AuthValuesInterfaces[key];
}[AuthTabsType]

type ValidationStrategiesType = {
    [key in AuthTabsType]: (values:AuthFormValues, errors: Record<string, string>) => Record<string, string>;
}

export type SendFormStrategiesType = {
    signup: (values: typeof AuthValuesInterfaces["signup"]) => void;
    login: (values: typeof AuthValuesInterfaces["login"]) => void;
    reset: (values: typeof AuthValuesInterfaces["reset"], callback: (code: string, email: string) => void) => void;
    code: (values: typeof AuthValuesInterfaces["code"], verifyCode: string) => void;
    create: (values: typeof AuthValuesInterfaces["create"], email: string) => void;
};

const validation = new Validation();
const authRequest = new AuthRequests();

export const validationStrategies: ValidationStrategiesType = {
    signup: (values, errors) => {
        if ("email" in values && "name" in values && "lastName" in values && "username" in values && "jobTitle" in values && "phone" in values && "password" in values) {
            errors.email = validation.emailValidation(values.email) ?? "";
            errors.name = validation.namesValidation(values.name) ?? "";
            errors.lastName = validation.namesValidation(values.lastName) ?? "";
            errors.username = validation.usernameValidation(values.username) ?? "";
            errors.jobTitle = validation.namesValidation(values.jobTitle) ?? "";
            errors.phone = validation.phoneValidation(values.phone) ?? "";
            errors.password = validation.passwordValidation(values.password) ?? "";
        }

        return errors;
    },
    login: (values, errors) => {
        if ("email" in values && "password" in values) {
            errors.email = validation.emailValidation(values.email) ?? "";
            errors.password = validation.passwordValidation(values.password) ?? "";
        
        }

        return errors;
    },
    reset: (values, errors: Record<string, string>) => {
        if ("email" in values) {
            errors.email = validation.emailValidation(values.email) ?? "";
        }

        return errors;
    },
    code: (values, errors) => {
        return errors;
    },
    create: (values, errors) => {
        if ("password" in values && "confirmPassword" in values) {
            errors.password = validation.passwordValidation(values.password) as string;
            errors.confirmPassword = validation.passwordValidation(values.confirmPassword) as string;
        }

        return errors;
    } 
};

export const sendFormStrategies:SendFormStrategiesType = {
    signup: (values:typeof AuthValuesInterfaces["signup"]) => {
        authRequest.sendRequest(values, "/api/v1/auth/signup?");
    },
    login: (values:typeof AuthValuesInterfaces["login"]) => {
        authRequest.sendRequest(values, "/api/v1/auth/login?");
    },
    reset: async (values: typeof AuthValuesInterfaces["reset"], callback: (code: string, email: string) => void) => {        
        authRequest.sendRequest(values, "/api/v1/auth/reset?");
        const codeResponse = await authRequest.sendRequest<ICodeResponse>(values, "/api/v1/auth/send-code?"); 

        callback?.(codeResponse?.code ?? "", values.email);
    },
    code: (values:typeof AuthValuesInterfaces["code"], verifyCode:string) => {        
        if (verifyCode !== values.code) throw new Error("Code incurrent");
    },
    create: (values:typeof AuthValuesInterfaces["create"], resetedEmail) => {
        const currentQueryData = {
            password: values.password,
            email: resetedEmail
        };

        if (values.password !== values.confirmPassword) throw new Error("Password must be same");

        authRequest.sendRequest(currentQueryData, "/api/v1/auth/change-password?");
    },
}