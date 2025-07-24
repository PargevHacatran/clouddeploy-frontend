import { AboutListItem } from "@/pages/landing/ui/AboutListItem";
import { aboutList } from "@/pages/landing/utils/aboutList";

export const AboutInfo = () => {
    return (
        <div className="flex flex-col gap-y-[20px]">
            <div className="flex flex-col gap-y-[17px]">
                <h3 className="text-[22px] leading-[30px] tracking-[-0.2px] text-[var(--color-white)] font-medium">Simple application deployment</h3>
                <p className="text-[17px] text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px]">Our service optimizes the deployment process, allowing developers to focus on writing quality code, rather than creating infrastructure.</p>
            </div>
            <div className="flex flex-col gap-y-[10px] mt-[30px]">
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