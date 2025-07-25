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
        <div className="flex flex-1 gap-x-[50px]">
            <div className="ml-[-25px] w-[50px] h-[50px] border-1 border-[var(--main-color)] rounded-[50%] bg-[var(--background)] flex justify-center items-center">
                <div 
                    ref={roadmaapPointRef}
                    className="w-[30px] h-[30px] bg-[var(--main-color)] rounded-[50%] opacity-[0]"
                >
                </div>
            </div>
            <div 
                className="flex flex-1 gap-x-[20px] opacity-20"
                ref={possibilitiesRef}
            >
                <div className="flex-1 flex flex-col gap-y-[20px]">
                    <div className="relative w-[42px] h-[42px]">
                        { icon }
                    </div>
                    <div className="flex flex-col gap-y-[17px] ">
                        <h3 className="text-[35px] leading-[42px] tracking-[-0.3px] font-medium text-[var(--color-white)]">{ title }</h3>
                        <p className="text-[17px] leading-[28px] tracking-[0.2px] text-[var(--color-white-60)]">{ description }</p>
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

                <div className="flex-1 flex">
                    <img 
                        src={imgURL} 
                        alt="" 
                        className="flex-1"
                    />
                </div>
            </div>
        </div>
    );
}