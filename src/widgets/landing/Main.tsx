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
        <section className="py-[100px] w-full flex justify-center reverse-radial-gradient rounded-[16px] px-[150px]">
            <div className="flex flex-1 justify-between gap-x-[20px] items-center">
                <div className="flex-1">
                    <p className="text-box-shadow text-gradient text-[17px] leading-[28px] tracking-[-0.2px]">First Deployment Service</p>
                    <h1 className="text-[86px] flex-1 font-bold text-[var(--color-white)] leading-[110px] tracking-[-3px]">Deploy your services with <span className="text-box-shadow text-gradient">{ runText }</span></h1>
                    
                    <div className="flex gap-x-[20px] mt-[30px]">
                        <Button
                            className="bg-[var(--color-white)] text-[var(--color-black)] py-[12px] px-[21px] rounded-[16px]"
                        >
                            Sign Up
                        </Button>
                        <Button
                            className="bg-[var(--color-white-20)] text-[var(--color-white)] py-[12px] px-[21px] rounded-[16px]"
                        >
                            Open Platform 
                        </Button>
                        <Button
                            className="bg-[var(--color-light-black)] text-[var(--color-white-80)] py-[12px] px-[21px] rounded-[16px]"
                        >
                            Documentation 
                        </Button>
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