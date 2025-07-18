import { MouseEvent, useEffect, useRef, useState } from "react";

interface ICheckbox {
    className: string;
    hasOnClickAnimation?: boolean;
    onClickAnimation?: string;
    animationIcon?: React.ReactNode;
    onClick: (e: MouseEvent<HTMLDivElement>) => void
}

export const Checkbox = ({ className, hasOnClickAnimation, onClickAnimation, animationIcon, onClick }: ICheckbox) => {
    const checkboxRef = useRef<HTMLDivElement>(null);
    const [animationStarted, setAnimationStarted] = useState<boolean>(false); 

    useEffect(() => {}, [animationStarted]);

    const startAnimation = (onClickAnimation:string) => {
        if (checkboxRef && checkboxRef.current) {
            setAnimationStarted(true);

            if (animationStarted) {
                checkboxRef.current.classList = "relative w-[28px] h-[28px]";
                checkboxRef.current.children[0]?.classList.add(onClickAnimation);

                setTimeout(() => {
                    stopAnimation(onClickAnimation);
                }, 10000);
            }
        }
    }

    const stopAnimation = (onClickAnimation:string) => {
        if (checkboxRef && checkboxRef.current) {
            setAnimationStarted(false);        
            
            checkboxRef.current.classList = className;
            checkboxRef.current.children[0]?.classList.remove(onClickAnimation);
        }
    }
    
    return (
        <div 
            ref={checkboxRef}
            className={className}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
                if (hasOnClickAnimation && onClickAnimation && animationIcon) {
                    startAnimation(onClickAnimation)
                }
                
                onClick(e);
            }}
        >
            { animationStarted ? animationIcon : null }
        </div>
    )
}