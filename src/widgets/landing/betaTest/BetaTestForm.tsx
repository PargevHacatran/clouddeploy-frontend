import { betaTestFormInputs, betaTestFormValues } from "@/pages/landing/utils/betaTestForm";
import { validationStrategies } from "@/pages/landing/utils/betaTestStrateries";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";
import axios from "axios";
import { Form, Formik } from "formik";

const INPUT_CLASSNAME = "flex flex-col gap-y-[10px] flex-1";
const INPUT_TITLE_CLASSNAME = "font-semibold text-[14px] leading-[17px] text-[var(--color-white-80)] flex justify-between";
const INPUT_AREA_CLASSNAME = "bg-[var(--color-white-10)] text-[var(--color-white-40)] py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none";

export const BetaTestForm = () => {
    return (
        <div className="py-[203px] w-full p-[30px] radial-gradient rounded-[16px] border-1 border-[var(--color-white-12)] flex flex-col items-center gap-y-[60px] box-shadow">
            <div className="flex flex-col items-center gap-y-[10px] text-center">
                <h2 className="font-medium text-[var(--color-white)] text-[46px] leading-[48px] tracking-[-2px]">Beta Test</h2>
                <p className="text-[var(--color-white-60)] text-[17px] leading-[30px] tracking-[-0.2px]">Sign up on open beta-test and try using CloudDeploy on of first <br /> Hurry up before February 2026</p>
            </div>

            <Formik
                initialValues={betaTestFormValues}
                validate={(values) => {
                    const errors: Record<string, string> = {};
                    const strategy = validationStrategies;
                    
                    return strategy ? strategy(values, errors) : errors
                }}
                onSubmit={() => {}}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors
                }) => (
                    <Form
                        onChange={handleChange}
                        className="flex flex-col gap-[20px] max-w-full"
                    >
                        {
                            Array.isArray(betaTestFormInputs) && betaTestFormInputs.map((inputsRowList, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="flex flex-1 justify-between gap-x-[20px] w-[900px] max-w-full xxs:flex-col xxs:gap-y-[20px] md:flex-row"
                                >
                                    {
                                        inputsRowList.map((inputItem, itemIndex) => {
                                            const currentErrors = errors[inputItem.name as keyof typeof errors];
                                            
                                            const addictionalStyles = {
                                                background: currentErrors ? "var(--color-red)" : "var(--color-white-10)",
                                                borderColoe: currentErrors ? "var(--color-white-10)" : "var(--color-white-5)"
                                            }
                                            
                                            return (
                                                <Input 
                                                    key={itemIndex}
                                                    name={inputItem.name}
                                                    value={values[inputItem.name as keyof typeof values] || ""}
                                                    onChange={handleChange}
                                                    titleClassName={INPUT_TITLE_CLASSNAME}
                                                    areaClassName={INPUT_AREA_CLASSNAME}
                                                    placeholder={inputItem.placeholder}
                                                    type={inputItem.type}
                                                    labelTitle={inputItem.labelTitle}
                                                    className={INPUT_CLASSNAME}
                                                    addictionalStyles={addictionalStyles}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }

                        <Button
                            className="py-[13px] px-[120px] bg-[var(--color-white)] text-[var(--color-black)] rounded-[8px] mt-[10px]"
                            type="submit"
                            onClick={() => {
                                const message = `Ф.И.О: ${values.lastName} ${values.name} \nТелефон: ${values.phone} \nПочта: ${values.email}`
                                
                                handleSubmit();
                            }}
                        >
                            Join
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}