"use client";

import AppLayout from "@/app/AppLayout";
import { Footer } from "@/shared/Footer";
import { Header } from "@/shared/Header";
import { BugBountyMain } from "@/widgets/bugbounty/main/BugBountyMain";
import { BugBountyOverview } from "@/widgets/bugbounty/overview/BugBountyOverview";
import { BugBountyRewards } from "@/widgets/bugbounty/rewards/BugBountyRewards";
import { BugBountyScopes } from "@/widgets/bugbounty/scopes/BugBountyScopes";
import { BugBountySubmissionProcess } from "@/widgets/bugbounty/submission-process/BugBountySubmissionProcess";
import { useEffect, useState } from "react";

export default function SignUp () {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        return (
            <AppLayout title="Bug Bounty | CloudDeploy"> 
                <div className="px-[38px] flex flex-col items-center xxs:px-[10px] lg:px-[30px]">
                    <Header />
                    <BugBountyMain />
                    <div className="max-w-full xl:px-[50px] 4xl:max-w-[1260px]">
                        <BugBountyOverview />
                        <BugBountyScopes />
                        <BugBountyRewards />
                        <BugBountySubmissionProcess />
                    </div>
                    <Footer />
                </div>                
            </AppLayout>
        )
    }
}