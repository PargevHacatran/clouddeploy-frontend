import { IOverviewListItem } from "@/pages/bug-bounty/utils/overviewList";

export const OverviewItem = ({ icon, title, description }: IOverviewListItem) => {
    return (
        <div className="flex-1 flex flex-col gap-y-[17px] bg-[var(--color-white-5)] p-[30px] rounded-[16px] border-1 border-[var(--color-white-10)]">
            <div className="relative w-[25px] h-[25px]">
                { icon }
            </div>
            <div className="flex flex-col gap-y-[17px]">
                <h3 className="text-[var(--color-white-80)] text-[20px] font-medium leading-[28px] tracking-[-0.2px]">{ title }</h3>
                <p className="text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px]">{ description }</p>
            </div>
        </div>
    );
}