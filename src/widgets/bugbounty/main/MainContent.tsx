import { icons } from "@/pages/bug-bounty/utils/icons"
import { Button } from "@/shared/Button"

export const MainContent = () => {
    return (
        <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center w-full h-full">
            <div className="flex gap-x-[5px] items-center">
                <div className="relative w-[20px] h-[20px]">
                    { icons.security }
                </div>
                <p className="text-[17px] leading-[22px] tracking-[-0.2px] text-[var(--color-white-60)] ">Безопасность Превыше Всего</p>
            </div>

            <div className="mt-[17px] flex flex-col items-center max-w-[1000px] gap-y-[17px]">
                <h1 className="text-[var(--color-white)] text-[64px] leading-[80px] tracking-[-1.8px] text-center">Программа Bug Bounty</h1>
                <p className="text-[22px] leading-[28px] tracking-[-0.2px] text-[var(--color-white-60)] text-center">Помогите нам защитить нашу инфраструктуру развертывания и получите вознаграждение. Мы верим в безопасность, основанную на участии сообщества.</p>
                <div className="flex gap-x-[17px] items-center">
                    <Button className="flex-1 whitespace-nowrap bg-[var(--color-white-20)] text-[var(--color-white)] py-[12px] px-[21px] rounded-[16px] xxs:text-[14px] 2xl:text-[16px] 4xl:text-[17px]">Стать Багхантером</Button>
                    <Button className="flex-1 whitespace-nowrap bg-[var(--color-light-black)] text-[var(--color-white-80)] py-[12px] px-[21px] rounded-[16px] xxs:text-[14px] 2xl:text-[16px] 4xl:text-[17px]">Документация</Button>                                
                </div>
            </div>
        </div>
    )
}