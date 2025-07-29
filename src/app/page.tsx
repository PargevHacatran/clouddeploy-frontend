"use client";

import { Footer } from "@/shared/Footer";
import { Header } from "@/shared/Header";
import { About } from "@/widgets/landing/about/About";
import { Advantures } from "@/widgets/landing/advantures/Advantures";
import { BetaTestForm } from "@/widgets/landing/betaTest/BetaTestForm";
import { FAQ } from "@/widgets/landing/faq/FAQ";
import { Main } from "@/widgets/landing/Main";
import { Possibilities } from "@/widgets/landing/possibilities/Possibilities";
import { useEffect, useState } from "react";

export default function Landing () {
    const [isClient, setIsClient] = useState<boolean>(false);
  
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient) {
        return ( 
            <div className="px-[38px] flex flex-col items-center xxs:px-[10px] lg:px-[30px]">
                <Header />
                <Main />
                <div className="max-w-full xl:px-[50px] 4xl:max-w-[1260px]">
                    <About />
                    <Advantures />
                </div>
                <Possibilities />
                <div className="max-w-full xl:px-[50px] 4xl:max-w-[1260px]">
                    <FAQ />
                    <BetaTestForm />
                </div>
                <Footer />
            </div>
        );
    }
}