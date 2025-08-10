import { MainBackground } from "./MainBackground";
import { MainContent } from "./MainContent";

export const BugBountyMain = () => {
    return (
        <div className="relative p-[35px] w-full">
            <MainBackground />
            <div className="absolute top-0 left-0 w-full h-full">
                <MainContent />
            </div>
        </div>
    );
}