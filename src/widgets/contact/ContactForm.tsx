import { contactFormInputs, contactFormValues, IInputItem } from "@/pages/contact/utils/contactFrom";
import { icons } from "@/pages/contact/utils/icons";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";
import { Form, Formik } from "formik"

const INPUT_TITLE_CLASSNAME = "font-semibold text-[14px] leading-[17px] text-[var(--color-white-80)] flex justify-between";
const INPUT_AREA_CLASSNAME = "bg-[var(--color-white-10)] password-wrapper text-[var(--color-white-40)] py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none";

export const ContactForm = () => {
    return (
        <div className="w-full h-full p-[30px] radial-gradient rounded-[16px] border-1 border-[var(--color-white-12)] box-shadow">
            <div className="flex flex-col gap-y-[30px]">
                <div className="relative w-[16px] h-[16px]">
                    { icons.contactIcon }
                </div>
                <div className="flex flex-col gap-y-[17px]">
                    <h1 className="text-[var(--color-white)] text-[24px] leading-[33px] tracking-[-0.2px]">Contact</h1>
                    <p className="text-[var(--color-white-60)] text-[17px] leading-[30px] tracking-[-0.2px] max-w-[300px]">Please provide your contact details to discuss your requirements</p>
                </div>
            </div>
            
            <Formik
                initialValues={contactFormValues}
                enableReinitialize={true}
                validate={() => {}}
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
                        className="w-full flex flex-col gap-[20px] mt-[20px]"                    
                    >
                        {
                            Array.isArray(contactFormInputs) && contactFormInputs.map((inputsRowList, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="flex flex-1 justify-between gap-x-[20px] "
                                >
                                    {
                                        inputsRowList.map((inputItem: IInputItem, itemIndex) => {
                                            const currentErrors = errors[inputItem.name as keyof typeof errors];

                                            const addictionalStyles = {
                                                background: currentErrors ? "var(--color-red)" : "var(--color-white-10)",
                                                borderColoe: currentErrors ? "var(--color-white-10)" : "var(--color-white-5)"
                                            }

                                            return (
                                                <div 
                                                    key={itemIndex}
                                                    className="flex flex-1"    
                                                >
                                                    <Input
                                                        name={inputItem.name}
                                                        value={values[inputItem.name as keyof typeof values] || ""}
                                                        onChange={handleChange}
                                                        titleClassName={INPUT_TITLE_CLASSNAME}
                                                        areaClassName={inputItem.name === "problem" ? `${INPUT_AREA_CLASSNAME} h-[100px]` : INPUT_AREA_CLASSNAME}
                                                        placeholder={inputItem.placeholder}
                                                        type={inputItem.type}
                                                        labelTitle={inputItem.labelTitle}
                                                        className="flex flex-col gap-y-[10px] flex-1"
                                                        addictionalStyles={addictionalStyles}
                                                        isMultiline={inputItem.name === "problem"}
                                                    />
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            ))
                        }

                        <Button
                            className="py-[13px] px-[120px] bg-[var(--color-white)] text-[var(--color-black)] rounded-[8px] mt-[10px]"
                            type="submit"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Sent
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )   
}