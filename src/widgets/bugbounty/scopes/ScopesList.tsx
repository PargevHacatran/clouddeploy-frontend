import { IScopeListItem } from "@/pages/bug-bounty/utils/sopesList";

import { ScopeListItem } from "@/pages/bug-bounty/ui/ScopeListItem";

export const ScopesList = ({ icon, title, items }: IScopeListItem) => {
    return (
        <div className="p-[30px] border-1 border-[var(--color-white-5)] rounded-[16px]">
            <div className="flex gap-x-[10px] items-center">
                <div className="relative w-[22px] h-[22px]">
                    { icon }
                </div>
                <h3 className="text-[var(--color-white-80)] text-[24px] leading-[28px] tracking-[-0.2px]">{ title }</h3>
            </div>
            <ul className="mt-[20px] flex flex-col gap-y-[10px]">
                {
                    Array.isArray(items) && items.map((scopeItem, itemIndex) => (
                        <ScopeListItem key={itemIndex}>{ scopeItem }</ScopeListItem>
                    ))
                }
            </ul>
        </div>
    );
}