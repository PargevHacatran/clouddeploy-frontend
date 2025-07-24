import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { LandingSectionTitle } from "../LandingSectionTitle";
import { advanturesList } from "@/pages/landing/utils/advanturesAssets";
import { AdvantureCart } from "./AdvantureCart";
import { AdvantureDowntime } from "./AdvantureDowntime";
import { AdvantureMultiPlatform } from "./AdvantureMultiPlatform";
import { AdvantureCDN } from "./AdvantureCDN";

export const Advantures = () => {
    const currentSectionTitle = sectionsTitles["advantures"];
    
    return (
        <section className="py-[50px] flex-1">
            <LandingSectionTitle 
                suptitle={currentSectionTitle.suptitle}
                title={currentSectionTitle.title}
                subtitle={currentSectionTitle.subtitle}
            />

            <div className="flex justify-center gap-x-[20px] mt-[30px]">
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
            <div className="flex justify-center mt-[30px]">
                <div className="flex flex-1 gap-x-[20px]">
                    <AdvantureMultiPlatform />
                    <AdvantureCDN />
                </div>
            </div>
        </section>
    );
}