"use client";

import { IFAQItem } from "@/pages/landing/utils/faqList"
import { icons } from "@/pages/landing/utils/icons";
import { Button } from "@/shared/Button"

interface IFAQAccordion extends IFAQItem {
    num: number;
    isOpen: boolean;
    onClick: () => void;
}

export const FAQAccrodion = ({ num, title, description, isOpen, onClick }: IFAQAccordion) => {
    return (
        <div 
            className={`flex flex-col gap-x-[15px] flex-1 p-[25px] justify-center rounded-[16px] border-1 border-[var(--color-white-12)] ${ isOpen ? "radial-gradient" : "bg-[var(--color-black-amber)]"} w-full hover:cursor-pointer faq-accordion xxs:p-[15px]`}
            style={{
                border: isOpen ? "1px solid var(--color-white-10)" : 0,
            }}
            onClick={() => onClick()}
        >
            <div className="flex flex-1 justify-between items-center gap-x-[50px]">
                <div className="flex xxs:gap-x-[20px] md:gap-x-[30px]">
                    <p className="text-[var(--color-white-60)] leading-[28px] font-semibold hover:cursor-text xxs:text-[17px] md:text-[22px]">{ num < 10 ? `0${num}` : num }</p>
                    <p className="text-[var(--color-white)] leading-[28px] hover:cursor-text xxs:text-[17px] md:text-[22px]">{ title }</p>
                </div>
                <div>
                    <Button
                        className="flex items-center"
                        onClick={() => {}}
                    >
                        <div
                            className="relative xxs:w-[10px] xxs:h-[10px] md:w-[20px] md:h-[20px] "
                            style={{
                                transform: `rotate(${ isOpen ? 180 : 0 }deg)`
                            }}
                        >
                            { icons.faqRow }
                        </div>              
                    </Button>
                </div>
            </div>
            {
                isOpen ?
                    <div 
                        className="xxs:p-[15px] md:p-[30px] "
                    >
                        <p 
                            dangerouslySetInnerHTML={ { __html: description }}
                            onClick={(event) => event.stopPropagation()}
                            className="whitespace-pre-line leading-[24px] tracking-[-0.2px] text-[var(--color-white-80)] hover:cursor-text xxs:text-[14px] md:text-[17px]"
                        >
                        </p>
                    </div>
                    : null
            }
        </div>
    )
}