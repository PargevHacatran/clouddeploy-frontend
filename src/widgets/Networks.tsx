import { NetworkItem } from "@/pages/public/ui/NetworkItem";
import { networksList } from "@/pages/public/utils/networksList";

export const Networks = () => {
    return  (
        <div className="flex flex-col justify-center gap-y-[5px] h-[350px]">
            {
                Array.isArray(networksList) && networksList.map((networkItem, itemIndex) => (
                    <NetworkItem
                        key={itemIndex}
                        icon={networkItem.icon}
                        link={networkItem.link}
                    />
                ))
            }
        </div>
    );
}