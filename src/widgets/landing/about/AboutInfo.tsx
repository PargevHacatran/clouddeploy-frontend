import { AboutListItem } from "@/pages/landing/ui/AboutListItem";
import { aboutList } from "@/pages/landing/utils/aboutList";

export const AboutInfo = () => {
    return (
        <div className="flex flex-col gap-y-[20px] xxs:gap-y-[10px] lg:items-center xl:items-start">
            <div className="flex flex-col md:items-center xl:items-start lg:gap-y-[22px] xl:gap-y-[17px]">
                <h3 className="leading-[30px] tracking-[-0.2px] text-[var(--color-white)] font-medium xxs:text-center md:text-[28px] lg:w-full xl:text-start xl:text-[22px]">Simple application deployment</h3>
                <p className="text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px] xxs:text-center md:text-[20px] md:max-w-[90%] xl:text-start xl:text-[17px] xl:max-w-full xl:w-full">Our service optimizes the deployment process, allowing developers to focus on writing quality code, rather than creating infrastructure.</p>
            </div>
            <div className="flex flex-col gap-y-[10px] xxs:mt-[0] md:mx-auto md:mt-[10px] lg:mx-0 lg:flex-row xl:flex-col 5xl:mt-[30px]">
                {
                    Array.isArray(aboutList) && aboutList.map((aboutItem, itemIndex) => (
                        <AboutListItem 
                            key={itemIndex}
                            title={aboutItem.title}
                            description={aboutItem.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}