"use client";

import { useEffect, useState } from "react";

import { authFormInputs, authFormValues, submitButtonContent, AuthValuesInterfaces, ISignUpValues, ILoginValues, IResetValues, ICodeValues, ICreateValues } from "@/pages/auth/utils/authForm";
import { sendFormStrategies, validationStrategies } from "@/pages/auth/utils/authStrategies";

import type { SendFormStrategiesType } from "@/pages/auth/utils/authStrategies";

import { IState } from "@/app/store";

import { Button } from "@/shared/Button";
import { ResendCode } from "@/pages/auth/ui/ResendCode";
import { AuthCaptcha } from "@/pages/auth/ui/AuthCaptcha";

import { useDispatch, useSelector } from "react-redux";
import { setAuthTabValue, setCodeValue, setResetedEmailValue } from "@/features/lib/redux/authRoute/authRouteSlice";
import { FormLayout } from "@/shared/FormLayout";

type AuthFormInputsType = typeof authFormInputs;
type SubmitButtonContentType = typeof submitButtonContent;

export type AuthTabsType = "signup" | "login" | "reset" | "code" | "create";

export const AuthForm = () => {
    const currentTab: AuthTabsType = useSelector((state: IState) => state.authRoute.tab);
    const verifyCode = useSelector((state:IState) => state.authRoute.code);
    const resetedEmail = useSelector((state:IState) => state.authRoute.resetedEmail);
    
    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState(authFormValues[currentTab]);

    useEffect(() => setInitialValues(authFormValues[currentTab]), [currentTab]);

    const convertValuesToType = (currentTab:AuthTabsType, values: typeof AuthValuesInterfaces[AuthTabsType]) => {
        switch (currentTab) {
            case "signup": return values as ISignUpValues;
            case "login": return values as ILoginValues;
            case "reset": return values as IResetValues;
            case "code": return values as ICodeValues;
            case "create": return values as ICreateValues;
            default: throw new Error(`Unknown tab type: ${currentTab}`);
        }
    }

    const handleSendRequest = async (values: typeof AuthValuesInterfaces[AuthTabsType]) => {
        const tab = currentTab as AuthTabsType;
        const handler = sendFormStrategies[currentTab as AuthTabsType];

        try {
            switch (tab) {
                case 'reset':
                    if ("email" in values) {
                        await (handler as SendFormStrategiesType['reset'])(
                            values as typeof AuthValuesInterfaces["reset"],
                            (code:string, email:string) => {
                                dispatch(setResetedEmailValue(email));
                                dispatch(setCodeValue(code));
                            }
                        );

                        dispatch(setAuthTabValue('code'));
                    }

                    break;
            
                case 'code':
                    if ("code" in values) {
                        await (handler as SendFormStrategiesType['code'])(values, verifyCode);
                        
                        dispatch(setAuthTabValue('create'));
                    }

                    break;
            
                case 'create':
                    if ("password" in values && "confirmPassword" in values) {    
                        await (handler as SendFormStrategiesType['create'])(values, resetedEmail);
                    }

                    break;
            
                case "login":
                    if ("email" in values && "password" in values) {
                        await (handler as SendFormStrategiesType['login'])(values);
                    }

                    break;
                case "signup":
                default:
                    if ("email" in values && "name" && "lastName" in values && "username" in values && "jobTitle" && "phone" && "password") {
                        await (handler as SendFormStrategiesType['signup'])(values);
                    }

                    break;
        }
        
        } catch (error) {
            console.error('Auth error:', error);
        }
    }

    const validate = (values: typeof AuthValuesInterfaces[AuthTabsType]) => {
        const errors: Record<string, string> = {};
        const strategy = validationStrategies[currentTab];

        if (strategy) {
            const typedValues = convertValuesToType(currentTab, values)
                        
            return strategy(typedValues, errors)
        }
    }

    const AdditionalContent = () => {
        return (
            <div>
                {
                    currentTab === "login" || currentTab === "signup" ? 
                        <div>
                            {
                                currentTab === "login" ? 
                                    <Button
                                        className="text-[var(--color-white-80)] font-semibold text-[14px] leading-[17px] underline text-start"
                                        onClick={() => dispatch(setAuthTabValue("reset"))}
                                    >
                                        Forgot password ?
                                    </Button>
                                : null
                            }
                            
                            <AuthCaptcha />
                        </div>
                    : null
                }

                {
                    currentTab === "code" ? 
                        <ResendCode />
                        : null
                }
            </div>
        );
    };

    return (
        <div className="w-[540px] mt-[20px] radial-gradient rounded-[16px] border-1 border-[var(--color-white-12)] flex flex-col gap-[20px] box-shadow p-[30px]">
            <FormLayout<typeof AuthValuesInterfaces[AuthTabsType]>
                initialValues={initialValues}
                validate={(values) => validate(values)}
                inputs={authFormInputs[currentTab as keyof AuthFormInputsType]}
                submitButtonText={submitButtonContent[currentTab as keyof SubmitButtonContentType]}
                submitCallback={(values) => handleSendRequest(values)}
                addictionalContent={<AdditionalContent />}
            />
        </div>
    )
}