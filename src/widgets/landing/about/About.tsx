import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { LandingSectionTitle } from "../LandingSectionTitle"
import { AboutInfo } from "./AboutInfo";

export const About = () => {
    const currentSectionsTitle = sectionsTitles["about"];
    
    return (
        <section>
            <LandingSectionTitle 
                suptitle={currentSectionsTitle.suptitle}
                title={currentSectionsTitle.title}
                subtitle={currentSectionsTitle.subtitle}
            />
            <div className="mt-[30px] flex gap-x-[20px]">
                <div className="flex-1">
                    <AboutInfo />
                </div>
                <div className="relative h-[400px] flex-1">
                    <img 
                        src="/video-placeholder.png"
                        alt=""
                        className="absolute w-full h-full top-0 left-0 rounded-[16px]"
                    />
                </div>
            </div>
        </section>
    );  
}