interface IMarker {
    children: React.ReactNode;
}

export const Marker = ({ children }: IMarker) => {
    return (
        <div className="marker-box-shadow bg-[var(--main-color)] border-1 border-[var(--color-white-10)] uppercase text-[8px] leading-[8px] tracking-[0.24px] text-[var(--color-white)] py-[4px] px-[6px] flex justify-center items-center w-fit h-fit rounded-[8px]">{ children }</div>
    )
}