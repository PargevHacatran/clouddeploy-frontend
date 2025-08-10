import { ISubmissionProcess } from "@/pages/landing/utils/submissionProcess";

interface ISubmissionProcessItem extends ISubmissionProcess {
    num: number;
}

export const SubmissionProcessItem = ({ num, title, description }: ISubmissionProcessItem) => {
    return (
        <div className="flex-1 flex flex-col items-center gap-y-[17px]">
            <div className="w-[75px] h-[75px] rounded-[50%] flex justify-center items-center bg-[var(--color-white-10)] border-1 border-[var(--color-white-5)]">
                <p className="text-[20px] font-medium text-[var(--color-white-80)] leading-[28px] tracking-[-0.2px]">{ num }</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-[10px]">
                <h3 className="text-center text-[20px] leading-[28px] tracking-[-0.2px] font-medium">{ title }</h3>
                <p className="text-center text-[17px] text-[var(--color-white-60)] leading-[28px] tracking-[-0.2px]">{ description }</p>
            </div>
        </div>
    );
}