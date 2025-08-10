import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { advanturesList } from "@/pages/landing/utils/advanturesAssets";

import { AdvantureCart } from "./AdvantureCart";
import { AdvantureDowntime } from "./AdvantureDowntime";
import { SectionTitle } from "@/widgets/SectionTitle";

export const Advantures = () => {
    const currentSectionTitle = sectionsTitles["advantures"];
    
    return (
        <section className="py-[50px] flex-1 flex items-center flex-col">
            <SectionTitle 
                suptitle={currentSectionTitle.suptitle}
                title={currentSectionTitle.title}
                subtitle={currentSectionTitle.subtitle}
            />

            <div className="flex justify-center items-center gap-x-[20px] mt-[30px] xxs:flex-col xxs:gap-y-[20px] lg:flex-row">
                {
                    Array.isArray(advanturesList) && advanturesList.map((advantureItem, itemIndex) => (
                        <AdvantureCart 
                            key={itemIndex}
                            icon={advantureItem.icon}
                            title={advantureItem.title}
                            description={advantureItem.description}
                        />
                    ))
                }
            </div>

            <div className="flex justify-center mt-[30px]">
                <AdvantureDowntime />
            </div>
        </section>
    );
}