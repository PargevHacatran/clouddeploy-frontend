"use client";

import { useEffect, useState } from "react";

import { authFormInputs, authFormValues, submitButtonContent, AuthValuesInterfaces, ISignUpValues, ILoginValues, IResetValues, ICodeValues, ICreateValues } from "@/pages/auth/utils/authForm";
import { renderFieldsStrategies, sendFormStrategies, validationStrategies } from "@/pages/auth/utils/authStrategies";

import type { RenderFieldsStrategiesType, SendFormStrategiesType } from "@/pages/auth/utils/authStrategies";

import { IState } from "@/app/store";

import { Button } from "@/shared/Button";
import { ResendCode } from "@/pages/auth/ui/ResendCode";
import { AuthCaptcha } from "@/pages/auth/ui/AuthCaptcha";

import { Form, Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { setAuthTabValue, setCodeValue, setResetedEmailValue } from "@/features/lib/redux/authRoute/authRouteSlice";

type AuthFormInputsType = typeof authFormInputs;
type SubmitButtonContentType = typeof submitButtonContent;

export type AuthTabsType = "signup" | "login" | "reset" | "code" | "create";

interface IInputItem {
    labelTitle: string;
    placeholder: string;
    name: string;
    type: string;
    visiblePassword?: string;
};

const INPUT_TITLE_CLASSNAME = "font-semibold text-[14px] leading-[17px] text-[var(--color-white-80)] flex justify-between";
const INPUT_AREA_CLASSNAME = "bg-[var(--color-white-10)] password-wrapper text-[var(--color-white-40)] py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none";

const PASSWORD_AREA_CLASSNAME = "flex flex-1 bg-[var(--color-white-10)] password-wrapper flex items-center py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none"; 

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

    return (
        <div className="w-[540px] mt-[20px]">
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validate={(values: typeof AuthValuesInterfaces[AuthTabsType]) => {
                    const errors: Record<string, string> = {};
                    const strategy = validationStrategies[currentTab];

                    if (strategy) {
                        const typedValues = convertValuesToType(currentTab, values)
                        
                        return strategy(typedValues, errors)
                    }
                }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={() => {}}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-full p-[30px] radial-gradient rounded-[16px] border-1 border-[var(--color-white-12)] flex flex-col gap-[20px] box-shadow"
                    >
                        {
                            Array.isArray(authFormInputs[currentTab as keyof AuthFormInputsType]) && authFormInputs[currentTab as keyof AuthFormInputsType].map((inputsRowList, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="flex flex-1 justify-between gap-x-[20px] "
                                >
                                    {
                                        inputsRowList.map((inputItem: IInputItem, itemIndex) => {
                                            const currentErrors = errors[inputItem.name as keyof typeof errors];
                                            const CurrentInput = renderFieldsStrategies[inputItem.type as keyof RenderFieldsStrategiesType ] ?? renderFieldsStrategies["input"];

                                            const addictionalStyles = {
                                                background: currentErrors ? "var(--color-red)" : "var(--color-white-10)",
                                                borderColoe: currentErrors ? "var(--color-white-10)" : "var(--color-white-5)"
                                            }

                                            return (
                                                <div 
                                                    key={itemIndex}
                                                    className="flex flex-1"    
                                                >
                                                    {
                                                        CurrentInput ? 
                                                            <CurrentInput
                                                                name={inputItem.name}
                                                                value={values[inputItem.name as keyof typeof values] || ""}
                                                                onChange={handleChange}
                                                                titleClassName={INPUT_TITLE_CLASSNAME}
                                                                areaClassName={inputItem.type === "password" ? PASSWORD_AREA_CLASSNAME : INPUT_AREA_CLASSNAME}
                                                                placeholder={inputItem.placeholder}
                                                                type={inputItem.type}
                                                                labelTitle={inputItem.labelTitle}
                                                                visiblePassword={inputItem.visiblePassword || ""}
                                                                className={inputItem.type === "password" ? "flex-1 flex" : "flex flex-col gap-y-[10px] flex-1"}
                                                                addictionalStyles={addictionalStyles}
                                                            />
                                                            : null
                                                    }
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            ))
                        }

                        {
                            currentTab === "login" ?
                                <Button
                                    className="text-[var(--color-white-80)] font-semibold text-[14px] leading-[17px] underline text-start"
                                    onClick={() => dispatch(setAuthTabValue("reset"))}
                                >
                                    Forgot password ?
                                </Button>
                                : currentTab === "code" ?
                                    <ResendCode />
                                    : null
                        }

                        {
                            currentTab === "login" || currentTab === "signup" ?
                                <AuthCaptcha />
                                : null
                        }

                        <Button
                            className="py-[13px] px-[120px] bg-[var(--color-white)] text-[var(--color-black)] rounded-[8px] mt-[10px]"
                            type="submit"
                            onClick={() => {
                                handleSubmit();
                                handleSendRequest(values);
                            }}
                        >
                            { submitButtonContent[currentTab as keyof SubmitButtonContentType] }
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}