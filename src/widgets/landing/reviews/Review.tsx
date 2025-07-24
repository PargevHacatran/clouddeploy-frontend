interface IReview {
    imgURL: string;
    name: string;
    jobTitle: string;
    review: string;
}

export const Review = ({ imgURL, name, jobTitle, review }: IReview) => {
    return (
        <div className="border-1 border-[var(--color-white-10)] rounded-[16px] p-[30px] radial-gradient flex-1">
            <div className="flex flex-col gap-y-[20px]">
                <div className="relative w-[64px] h-[64px]">
                    <img
                        src={imgURL}
                        alt=""
                        className="absolute w-full h-full rounded-[50%]"
                    />
                </div>

                <div className="flex flex-col gap-y-[5px]">
                    <p className="text-[var(--color-white)] text-[22px] leading-[30px] tracking-[-0.2px] font-medium">{ name }</p>
                    <p className="text-[var(--color-white-40)] text-[17px] leading-[28px] tracking-[-0.2px]">{ jobTitle }</p>
                </div>
            </div>
            <div className="mt-[10px]">
                <p className="flex text-[14px]">{ review }</p>
            </div>
        </div>
    );
}