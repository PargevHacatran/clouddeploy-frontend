import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { LandingSectionTitle } from "../LandingSectionTitle";
import { possibilitiesList } from "@/pages/landing/utils/possibilitiesList";
import { PossibilitiesItem } from "./PossibilitiesItem";

export const Possibilities = () => {
    const currentSectionsTitle = sectionsTitles["possibilities"];
    
    return (
        <section className="py-[50px] w-full flex flex-col items-center xxs:px-[10px] xl:px-[50px] xl:max-w-full">
            <LandingSectionTitle 
                suptitle={currentSectionsTitle.suptitle}
                title={currentSectionsTitle.title}
                subtitle={currentSectionsTitle.subtitle}
            />

            <div className="w-full mt-[30px] flex justify-center">
                <div className="max-w-[1260px]">
                    <div className="flex flex-col gap-y-[100px] border-l-1 border-[var(--main-color)] pt-[50px]">
                        {
                            Array.isArray(possibilitiesList) && possibilitiesList.map((possibilitiesItem, itemIndex) => (
                                <PossibilitiesItem 
                                    key={itemIndex}
                                    title={possibilitiesItem.title}
                                    description={possibilitiesItem.description}
                                    imgURL={possibilitiesItem.imgURL}
                                    stack={possibilitiesItem.stack}
                                    icon={possibilitiesItem.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}