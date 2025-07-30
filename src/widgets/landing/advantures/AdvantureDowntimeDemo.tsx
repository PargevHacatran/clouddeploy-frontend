import { icons } from "@/pages/landing/utils/icons"

export const AdvantureDowntimeDemo = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-[17px] border-1 border-[var(--color-white-5)] bg-[var(--color-white-10)] rounded-[16px] p-[30px]">
            <div className="flex justify-between items-center">
                <p className="text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px] xxs:text-[14px] md:text-[17px]">Deployment Status</p>
                <div className="flex gap-x-[10px] items-center">
                    <div className="relative w-[12px] h-[12px]">
                        { icons.checkMark }
                    </div>
                    <p className="text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px] xxs:text-[14px] md:text-[17px]">Active</p>
                </div>
            </div>
            <div className="h-[5px] bg-[var(--color-white-80)]"></div>
            <div>
                <p className="text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px] xxs:text-[14px] md:text-[17px]">Version 2.1.4 deployed successfull</p>
            </div>
        </div>
    )
}