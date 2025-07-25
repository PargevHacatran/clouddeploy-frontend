import { footerMainInfo } from "@/pages/public/utils/footerMainInfo"
import { FooterInfoItem } from "./FooterInfoItem"

export const FooterMainInfo = () => {
    return (
        <div className="flex-1 flex flex-col h-[350px] gap-y-[60px] justify-between border-1 border-[var(--color-white-5)] p-[30px] rounded-[16px]">
            <div>
                <h2 className="font-['Inter'] text-[19px] text-[#fff] leading-[28px] tracking-[-0.3px]">© CloudDeploy 2025</h2>
                <p className="max-w-[655px] font-['Inter'] text-[16px] text-[#ffffff60] leading-[25px] mt-[14px]">Здесь вы найдете контактные данные, политику конфиденциальности, условия использования и ссылки на социальные сети. Мы всегда на связи и готовы предоставить необходимую информацию и поддержку</p>
            </div>
            <div className="flex gap-x-[15px] flex-wrap">
                {
                    Array.isArray(footerMainInfo) && footerMainInfo.map((footerItem, itemIndex) => (
                        <FooterInfoItem 
                            key={itemIndex}
                            text={footerItem.text}
                            hasLink={footerItem.hasLink ?? undefined}
                            link={footerItem.link ?? undefined}
                        />
                    ))
                }
            </div>
        </div>
    )
}