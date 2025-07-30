import { Button } from "@/shared/Button";
import { useEffect, useState } from "react";

const runTextData = ["C", "l", "o", "u", "d", "D", "e", "p", "l", "o", "y"];

export const Main = () => {
    const [runText, setRunText] = useState<string>("");
    
    useEffect(() => {
        let currentIndex = 0;

        const typeNextLetter = () => {
            if (currentIndex < runTextData.length - 1) {
                setRunText(prev => prev + runTextData[currentIndex]);
                
                currentIndex++;
                
                setTimeout(typeNextLetter, 350);
            }
        };

        typeNextLetter();

        return () => {
            currentIndex = runTextData.length;
        };
    }, []);

    return (
        <section className="w-full flex justify-center reverse-radial-gradient rounded-[16px] xxs:py-[15px] xxs:px-[15px] xl:p-[50px] 2xl:p-[75px] 3xl:p-[100px] 5xl:p-[150px]">
            <div className="flex flex-1 justify-between gap-[20px] items-center xxs:flex-col xl:flex-row">
                <div className="flex-1">
                    <p className="text-box-shadow text-gradient leading-[28px] tracking-[-0.2px] xxs:text-[14px] xl:text-[17px]">First Deployment Service</p>
                    <h1 className="flex-1 font-bold text-[var(--color-white)] xxs:text-[28px] xxs:leading-[42px] xxs:tracking-[-0.3px] xs:text-[35px] sm:text-[44px] sm:leading-[58px] sm:tracking-[-1px] md:text-[62px] md:leading-[80px] md:tracking-[-1.5px] lg:text-[72px] lg:leading-[96px] lg:tracking-[-2px] xl:text-[44px] xl:leading-[58px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:tracking-[-1px] 3xl:text-[62px] 3xl:leading-[80px] 3xl:tracking-[-1.5px] 4xl:text-[80px] 4xl:leading-[110px] 4xl:tracking-[-3px] ">
                        Deploy your services with  
                        <span className="text-box-shadow text-gradient"> { runText }</span>
                    </h1>
                    
                    <div className="flex gap-[20px] mt-[30px] xxs:flex-wrap xxs:gap-[10px]">
                        <Button className="bg-[var(--color-white)] text-[var(--color-black)] py-[12px] px-[21px] rounded-[16px] xxs:text-[14px] 2xl:text-[16px] 4xl:text-[17px]">Sign Up</Button>
                        <Button className="bg-[var(--color-white-20)] text-[var(--color-white)] py-[12px] px-[21px] rounded-[16px] xxs:text-[14px] 2xl:text-[16px] 4xl:text-[17px]">Open Platform </Button>
                        <Button className="bg-[var(--color-light-black)] text-[var(--color-white-80)] py-[12px] px-[21px] rounded-[16px] xxs:text-[14px] 2xl:text-[16px] 4xl:text-[17px}">Documentation </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <video className="flex-1 rounded-[16px]" autoPlay muted loop controls>
                        <source src="/test-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}