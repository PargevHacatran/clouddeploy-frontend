import { ISectionTitle } from "@/pages/landing/utils/sectionsTitles";

export const SectionTitle = ({ suptitle, title, subtitle }: ISectionTitle) => {
    return (
        <div className="text-center flex flex-col items-center w-full">
            <div className="max-w-[400px] flex flex-col gap-y-[17px]">
                {
                    suptitle ?
                        <p className="text-gradient text-box-shadow text-[14px] leading-[20px] font-semibold">{ suptitle }</p>
                        : null
                }
                <h2 className="text-[34px] text-[var(--color-white)] leading-[36px] tracking-[-1.44px]">{ title }</h2>
                {
                    subtitle ?
                        <p className="text-[17px] text-[var(--color-white-60)] leading-[30px] tracking-[-0.2px]">{ subtitle }</p>
                        : null
                }
            </div>
        </div>
    );
}