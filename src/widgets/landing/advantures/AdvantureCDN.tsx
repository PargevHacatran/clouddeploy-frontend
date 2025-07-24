export const AdvantureCDN = () => {
    return (
        <div className="p-[30px] rounded-[16px] flex flex-col gap-y-[20px] bg-[var(--color-black-amber)]">
            <div className="flex flex-col gap-y-[10px]">
                <h3 className="text-[22px] leading-[30px] tracking-[-0.2px] text-[var(--color-white)] font-medium">Russian CDN</h3>
                <p className="max-w-[325px] text-[17px] text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px]">Delivary your applications from 150+ edge locations worldwide</p>
            </div>
            <div className="flex flex-col gap-y-[5px]">
                <p className="text-[35px] font-medium text-[var(--color-white)] leading-[48px] tracking-[2px]">99.9%</p>
                <p className="text-[17px] text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px]">Uptime SLA</p>
            </div>
        </div>
    )
}