import { LandingSectionTitle } from "@/widgets/landing/LandingSectionTitle";
import { faqList } from "@/pages/landing/utils/faqList";
import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { FAQAccrodion } from "./FAQAccrodion";
import { useState } from "react";

export const FAQ = () => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const currentSectionTitle = sectionsTitles["faq"];

    const handleAccordionClick = (index: number) => {
        if (openAccordionIndex === index) {
            setOpenAccordionIndex(null);
            return;
        }
        
        setOpenAccordionIndex(index)
    };
    
    return (
        <section className="w-full py-[100px]">
            <LandingSectionTitle 
                suptitle={currentSectionTitle.suptitle}
                title={currentSectionTitle.title}
                subtitle={currentSectionTitle.subtitle}
            />

            <div className="flex flex-col gap-y-[10px] items-center mt-[30px]">
                {
                    Array.isArray(faqList) && faqList.map((faqItem, faqIndex) => (
                        <FAQAccrodion 
                            key={faqIndex}
                            num={faqIndex + 1}
                            title={faqItem.title}
                            description={faqItem.description}
                            isOpen={openAccordionIndex === faqIndex}
                            onClick={() => handleAccordionClick(faqIndex)}
                        />
                    ))
                }
            </div>
        </section>
    );
}