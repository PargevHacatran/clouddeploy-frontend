"use client";

import { Footer } from "@/shared/Footer";
import { Header } from "@/shared/Header";
import { About } from "@/widgets/landing/about/About";
import { Advantures } from "@/widgets/landing/advantures/Advantures";
import { BetaTestForm } from "@/widgets/landing/betaTest/BetaTestForm";
import { FAQ } from "@/widgets/landing/faq/FAQ";
import { Main } from "@/widgets/landing/Main";
import { Reviews } from "@/widgets/landing/reviews/Reviews";
import { useEffect, useState } from "react";

export default function Landing () {
    const [isClient, setIsClient] = useState<boolean>(false);
  
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient) {
        return ( 
            <div className="px-[38px] flex flex-col items-center">
                <Header />
                <Main />
                <div className="max-w-[1260px]">
                  <Advantures />
                  <Reviews />
                  <FAQ />
                  <BetaTestForm />
                </div>
                <Footer />
            </div>
        );
    }
}