import { TableData } from "@/pages/bug-bounty/ui/TableData";
import { TableHeader } from "@/pages/bug-bounty/ui/TableHeader";
import { rewardsTableData, rewardsTableHeaders } from "@/pages/bug-bounty/utils/rewardsAssets";

export const RewardsTable = () => {
    return (
        <div className="w-full mt-[50px] bg-[var(--color-white-5)] rounded-[16px] border-1 border-[var(--color-white-10)] px-[15px] py-[20px]">
            <div
              className="w-full grid"
                style={{
                    gridTemplateColumns: `repeat(${rewardsTableHeaders?.length ?? 0}, auto)`,
                }}
            >
                {
                    Array.isArray(rewardsTableHeaders) && rewardsTableHeaders.map((headerItem, itemIndex) => (
                        <TableHeader 
                            key={itemIndex}
                            className={`${ itemIndex === 0 || itemIndex === rewardsTableHeaders.length - 1 ? "text-center" : ""} text-[20px] leading-[28px] tracking-[-0.2px] font-medium`}
                        >
                                { headerItem.title }
                        </TableHeader>

                    ))
                }

                {
                    Array.isArray(rewardsTableData) && rewardsTableData.map((item, itemIndex) => {
                        const itemsKeys = Object.keys(item);
                        
                        return itemsKeys.map((key) => {
                            const dataKey = rewardsTableHeaders.filter((item) => item.dataParametr === key)[0].dataParametr;
                        
                            return (
                                <TableData
                                    key={itemIndex + Math.random()} 
                                    className={`py-[15px] ${ itemIndex === 0 ? "mt-[20px]" : ""} ${ dataKey === "severity" || dataKey === "rewardsRange" ? "text-center" : ""} ${ itemIndex === rewardsTableData.length - 1 ? "border-0 pb-[0px]" : "border-b-1 border-[var(--color-white-10)]" } text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px]`}
                                >
                                    { item[dataKey as keyof typeof item] }
                                </TableData>
                            );
                        });
                    })
                }
            </div>     
        </div>
    );
}