import { sectionsTitles } from "@/pages/bug-bounty/utils/sectionsTitles";
import { SectionTitle } from "@/widgets/SectionTitle"
import { RewardsTable } from "./RewardsTable";

export const BugBountyRewards = () => {
    const currentSectionsTitle = sectionsTitles["rewards"];

    return (
        <section className="py-[50px]">
            <SectionTitle 
                suptitle={currentSectionsTitle["suptitle"] ?? undefined}
                title={currentSectionsTitle["title"]}
                subtitle={currentSectionsTitle["subtitle" as keyof typeof currentSectionsTitle] ?? undefined}
            />
            <RewardsTable />
        </section>
    )
}