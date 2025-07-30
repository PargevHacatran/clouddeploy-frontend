import { IAdvantureCart } from "@/pages/landing/utils/advanturesAssets"

export const AdvantureCart = ({ icon, title, description }: IAdvantureCart) => {
    return (
        <div className="flex flex-col gap-y-[17px] bg-[var(--color-black-amber)] max-w-[400px] p-[30px] rounded-[16px]">
            <div className="relative w-[64px] h-[64px] xxs:w-[48px] xxs:h-[48px]">
                { icon }
            </div>
            <div className="flex flex-col gap-y-[17px]">
                <p className="text-[var(--color-white)] text-[22px] leading-[30px] tracking-[-0.2px] font-medium xxs:text-[17px]">{ title }</p>
                <p className="text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px] xxs:text-[14px]">{ description }</p>
            </div>
        </div>
    )
}