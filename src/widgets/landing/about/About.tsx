import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { LandingSectionTitle } from "../LandingSectionTitle"
import { AboutInfo } from "./AboutInfo";
import Image from "next/image";

export const About = () => {
    const currentSectionsTitle = sectionsTitles["about"];
    
    return (
        <section className="w-full max-w-full py-[50px]">
            <LandingSectionTitle 
                suptitle={currentSectionsTitle.suptitle}
                title={currentSectionsTitle.title}
                subtitle={currentSectionsTitle.subtitle}
            />
            <div className="mt-[30px] flex gap-x-[20px] xxs:flex-col-reverse xxs:gap-y-[20px] lg:items-center xl:flex-row">
                <div className="flex-1">
                    <AboutInfo />
                </div>
                <div className="relative w-full xxs:h-[300px] sm:h-[345px] md:h-[400px] lg:h-[500px] xl:flex-1 xl:w-auto xl:h-[370px]"> 
                    <Image
                        src="/video-placeholder.png"
                        alt=""
                        layout="fill"
                        className="rounded-[8px]"
                    />
                </div>
            </div>
        </section>
    );  
}