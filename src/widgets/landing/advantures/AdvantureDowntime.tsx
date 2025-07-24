import { DowntimeListItem } from "@/pages/landing/ui/DowntimeListItem"
import { downtimeList } from "@/pages/landing/utils/advanturesAssets";
import { AdvantureDowntimeDemo } from "./AdvantureDowntimeDemo";

export const AdvantureDowntime = () => {
    return (
        <div className="w-full flex items-center rounded-[16px] radial-gradient max-w-[1240px] p-[30px]">
            <div className="flex-1 flex flex-col gap-y-[17px]">
                <div className="flex flex-col gap-y-[17px]">
                    <h3 className="text-[22px] leading-[30px] tracking-[-0.2px] text-[var(--color-white)] font-medium">Zero-Downtime Deployments</h3>
                    <p className="text-[17px] leading-[30px] tracking-[-0.2px] text-[var(--color-white-60)]">Our advanced blue-green deployment strategy ensures your users never experience interruptions. Rollback in seconds if needed.</p>
                </div>
                <div>
                    <ul className="flex flex-col gap-y-[10px]">
                        {
                            Array.isArray(downtimeList) && downtimeList.map((listItem, itemIndex) => (
                                <DowntimeListItem 
                                    key={itemIndex}
                                    text={listItem}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                    <AdvantureDowntimeDemo />
            </div>
        </div>
    );
}