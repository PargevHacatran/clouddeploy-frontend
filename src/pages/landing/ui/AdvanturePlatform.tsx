import { IAdvanturePlatforms } from "../utils/advanturesAssets"

export const AdvanturePlatform = ({ icon, title }:IAdvanturePlatforms) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-[10px]">
            <div className="relative w-[64px] h-[64px]">
                { icon }
            </div>

            <p className="text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px]">{ title }</p>
        </div>
    )
}