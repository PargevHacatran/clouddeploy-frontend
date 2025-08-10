import { overviewList } from "@/pages/bug-bounty/utils/overviewList";
import { sectionsTitles } from "@/pages/bug-bounty/utils/sectionsTitles";
import { SectionTitle } from "@/widgets/SectionTitle";
import { OverviewItem } from "./OverviewItem";

export const BugBountyOverview = () => {
    const currentSectionsTitle = sectionsTitles["overview"];

    return (
        <section className="py-[50px]">
            <SectionTitle 
                suptitle={currentSectionsTitle["suptitle"] ?? undefined}
                title={currentSectionsTitle["title"]}
                subtitle={currentSectionsTitle["subtitle"] ?? undefined}
            />

            <div className="flex gap-x-[30px] mt-[50px]">
                {
                    Array.isArray(overviewList) && overviewList.map((overviewItem, itemIndex) => (
                        <OverviewItem 
                            key={itemIndex}
                            icon={overviewItem.icon}
                            title={overviewItem.title}
                            description={overviewItem.description}
                        />
                    ))
                }
            </div>
        </section>
    );
}