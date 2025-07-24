import { AdvanturePlatform } from "@/pages/landing/ui/AdvanturePlatform"
import { supportedPlatforms } from "@/pages/landing/utils/advanturesAssets"

export const AdvantureMultiPlatform = () => {
    return (
        <div className="flex flex-col gap-y-[17px] bg-[var(--color-black-amber)] flex-1 p-[30px] rounded-[16px]">
            <h3 className="text-[22px] leading-[30px] tracking-[-0.2px] text-[var(--color-white)]">Multi-Platform Support</h3>
            <div className="flex-1 flex justify-between px-[100px]">
                {
                    Array.isArray(supportedPlatforms) && supportedPlatforms.map((platformItem, itemIndex) => (
                        <AdvanturePlatform 
                            key={itemIndex}
                            icon={platformItem.icon}
                            title={platformItem.title}                            
                        />
                    ))
                }
            </div>
        </div>
    )
}