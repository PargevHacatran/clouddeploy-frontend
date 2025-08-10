import { sectionsTitles } from "@/pages/bug-bounty/utils/sectionsTitles"
import { scopesList } from "@/pages/bug-bounty/utils/sopesList";
import { SectionTitle } from "@/widgets/SectionTitle";
import { ScopesList } from "./ScopesList";

export const BugBountyScopes = () => {
    const currentSectionsTitle = sectionsTitles["scope"];

    return (
        <section className="py-[50px]">
            <SectionTitle 
                suptitle={currentSectionsTitle["suptitle"] ?? undefined}
                title={currentSectionsTitle["title"]}
                subtitle={currentSectionsTitle["subtitle" as keyof typeof currentSectionsTitle] ?? undefined}
            />
            <div className="flex gap-x-[30px] mt-[50px] justify-center">
                {
                    Object.keys(scopesList).map((key, keyIndex) => (
                        <ScopesList 
                            key={keyIndex}
                            icon={scopesList[key as keyof typeof scopesList].icon}
                            title={scopesList[key as keyof typeof scopesList].title}
                            items={scopesList[key as keyof typeof scopesList].items}
                        />
                    ))
                }
            </div>
        </section>
    );
}