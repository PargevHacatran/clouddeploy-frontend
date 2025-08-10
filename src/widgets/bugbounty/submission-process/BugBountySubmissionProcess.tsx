import { sectionsTitles } from "@/pages/bug-bounty/utils/sectionsTitles";
import { submissionProcess } from "@/pages/landing/utils/submissionProcess";
import { SectionTitle } from "@/widgets/SectionTitle";
import { SubmissionProcessItem } from "./SubmissionProcessItem";

export const BugBountySubmissionProcess = () => {
    const currentSectionsTitle = sectionsTitles["submission"];
    
    return (
        <section className="py-[50px]">
            <SectionTitle 
                suptitle={currentSectionsTitle["suptitle"] ?? undefined}
                title={currentSectionsTitle["title"]}
                subtitle={currentSectionsTitle["subtitle" as keyof typeof currentSectionsTitle] ?? undefined}
            />           
            <div className="flex gap-x-[30px] mt-[50px]">
                {
                    Array.isArray(submissionProcess) && submissionProcess.map((processItem, itemIndex) => (
                        <SubmissionProcessItem
                            key={itemIndex}
                            num={++itemIndex}
                            title={processItem.title}
                            description={processItem.description}
                        />
                    ))
                }
            </div>
        </section>
    );
}