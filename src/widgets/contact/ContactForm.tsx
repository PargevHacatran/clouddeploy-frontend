import { contactFormInputs, contactFormValues } from "@/pages/contact/utils/contactFrom";
import { icons } from "@/pages/contact/utils/icons";

import { FormLayout } from "@/shared/FormLayout";

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
            
            <FormLayout<typeof contactFormValues> 
                initialValues={contactFormValues}
                validate={() => {}}
                inputs={contactFormInputs}
                submitButtonText="Sent"
                submitCallback={() => {}}
            />
        </div>
    )   
};