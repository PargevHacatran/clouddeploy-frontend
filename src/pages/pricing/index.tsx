"use client";

import AppLayout from "@/app/AppLayout";
import { Footer } from "@/shared/Footer";
import { Header } from "@/shared/Header";
import { PricingTariffs } from "@/widgets/pricing/tariffs/PricingTariffs";
import { useEffect, useState } from "react";

export default function SignUp () {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        return (
            <AppLayout title="Тарифы | CloudDeploy"> 
                <div className="px-[38px] flex flex-col items-center xxs:px-[10px] lg:px-[30px]">
                    <Header />
                    <div className="max-w-full 4xl:w-[1260px]">
                        <PricingTariffs />
                    </div>
                    <Footer />
                </div>                
            </AppLayout>
        )
    }
}