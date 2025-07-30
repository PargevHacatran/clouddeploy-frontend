import { renderFieldsStrategies, RenderFieldsStrategiesType } from "@/pages/public/utils/formStrategies";

import { IInputItem } from "@/pages/public/utils/formUtils";

import { Button } from "./Button";

import { Formik, Form } from "formik";

interface IFormLayout<T extends object>{
    initialValues: T;
    validate: (values:T) => void;
    inputs: IInputItem[][];
    submitButtonText: string;
    submitCallback: (values:T) => void;
    addictionalContent?: React.ReactNode;
}

const INPUT_TITLE_CLASSNAME = "font-semibold text-[14px] leading-[17px] text-[var(--color-white-80)] flex justify-between";
const INPUT_AREA_CLASSNAME = "bg-[var(--color-white-10)] password-wrapper text-[var(--color-white-40)] py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none";

const PASSWORD_AREA_CLASSNAME = "flex flex-1 bg-[var(--color-white-10)] password-wrapper flex items-center py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none"; 

export const FormLayout = <T extends object>({ initialValues, validate, inputs, submitButtonText, submitCallback, addictionalContent }:IFormLayout<T>) => {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validateOnBlur={false}
            validateOnChange={false}
            validate={(values) => validate(values)}
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
                    className="w-full flex flex-col gap-[20px]"                    
                >
                    {
                        Array.isArray(inputs) && inputs.map((inputsRowList, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex flex-1 justify-between gap-x-[20px] "
                            >
                                {
                                    inputsRowList.map((inputItem: IInputItem, itemIndex:number) => {
                                        const currentErrors = errors[inputItem.name as keyof typeof errors];
                                        const CurrentInput = renderFieldsStrategies[inputItem.type as keyof RenderFieldsStrategiesType] ?? renderFieldsStrategies["input"];
                                        

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
                                                            value={values[inputItem.name as keyof typeof values] as string || ""}
                                                            onChange={handleChange}
                                                            titleClassName={INPUT_TITLE_CLASSNAME}
                                                            areaClassName={inputItem.type === "password" ? PASSWORD_AREA_CLASSNAME : inputItem.isMultiline ? `${INPUT_AREA_CLASSNAME} h-[100px]` : INPUT_AREA_CLASSNAME}
                                                            placeholder={inputItem.placeholder}
                                                            type={inputItem.type}
                                                            labelTitle={inputItem.labelTitle}
                                                            visiblePassword={inputItem.visiblePassword || ""}
                                                            className={inputItem.type === "password" ? "flex-1 flex" : "flex flex-col gap-y-[10px] flex-1"}
                                                            addictionalStyles={addictionalStyles}
                                                            isMultiline={inputItem.isMultiline}
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

                    { addictionalContent }

                    <Button
                        className="py-[13px] px-[120px] bg-[var(--color-white)] text-[var(--color-black)] rounded-[8px] mt-[10px]"
                        type="submit"
                        onClick={() => {
                            submitCallback(values);
                            handleSubmit();
                        }}
                    >
                        { submitButtonText }
                    </Button>
                </Form>
            )}
        </Formik>
    );
};