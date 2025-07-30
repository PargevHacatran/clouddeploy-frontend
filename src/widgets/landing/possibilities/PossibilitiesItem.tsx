import { IPossibilitiesItem } from "@/pages/landing/utils/possibilitiesList";
import { PossibilitiesStackItem } from "@/pages/landing/ui/PossibilitiesStackItem";
import { useEffect, useRef } from "react";

export const PossibilitiesItem = ({ title, description, imgURL, stack, icon }:IPossibilitiesItem) => {
    const possibilitiesRef = useRef<HTMLDivElement>(null);
    const roadmaapPointRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-possibilties");
            } else {
                entry.target.classList.remove("show-possibilties");
            }
        }, { threshold: 0.1 });

        if (possibilitiesRef.current) observer.observe(possibilitiesRef.current);
        if (roadmaapPointRef.current) observer.observe(roadmaapPointRef.current);

        return () => observer.disconnect();
    }, [])
    
    return (
        <div className="flex flex-1 xxs:gap-x-[20px] xl:gap-x-[30px] 2xl:gap-x-[50px]">
            <div className="border-1 border-[var(--main-color)] rounded-[50%] bg-[var(--background)] flex justify-center items-center xxs:w-[25px] xxs:h-[25px] xxs:ml-[-12.5px] xl:w-[40px] xl:h-[40px] xl:ml-[-20px] 2xl:ml-[-25px] 2xl:w-[50px] 2xl:h-[50px]">
                <div 
                    ref={roadmaapPointRef}
                    className="w-[30px] h-[30px] bg-[var(--main-color)] rounded-[50%] opacity-[0] xxs:w-[15px] xxs:h-[15px] xl:w-[25px] xl:h-[25px]"
                >
                </div>
            </div>
            <div 
                className="flex flex-1 xxs:gap-x-[20px] opacity-20 2xl:gap-x-[30px]"
                ref={possibilitiesRef}
            >
                <div className="flex-1 flex flex-col gap-y-[20px]">
                    <div className="relative xxs:w-[30px] xxs:h-[30px] md:w-[42px] md:h-[42px]">
                        { icon }
                    </div>
                    <div className="flex flex-col gap-y-[17px] ">
                        <h3 className="text-[35px] leading-[42px] tracking-[-0.3px] font-medium text-[var(--color-white)] xxs:text-[28px] md:text-[35px]">{ title }</h3>
                        <p className="leading-[28px] tracking-[-0.2px] text-[var(--color-white-60)] xxs:text-[14px] md:text-[17px]">{ description }</p>
                    </div>

                    <div className="flex gap-[20px] flex-wrap">
                        {
                            Array.isArray(stack) && stack.map((stackItem, itemIndex) => (
                                <PossibilitiesStackItem
                                    key={itemIndex}
                                    icon={stackItem.icon}
                                    title={stackItem.title}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className="flex-1 flex items-center xxs:hidden 2xl:flex">
                    <img 
                        src={imgURL} 
                        alt="" 
                        className="flex-1  max-h-[500px]"
                    />
                </div>
            </div>
        </div>
    );
}