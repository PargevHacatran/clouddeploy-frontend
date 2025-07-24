"use client";

import { Header } from "@/shared/Header";
import { BetaTestForm } from "@/widgets/landing/BetaTestForm";
import { FAQ } from "@/widgets/landing/FAQ";
import { Main } from "@/widgets/landing/Main";
import { Reviews } from "@/widgets/landing/Reviews";
import { useEffect, useState } from "react";

export default function Landing () {
    const [isClient, setIsClient] = useState<boolean>(false);
  
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient) {
        return ( 
            <div className="px-[38px]">
                <Header />
                <Main />
                <Reviews />
                <FAQ />
                <BetaTestForm />
            </div>
        );
    }
}
