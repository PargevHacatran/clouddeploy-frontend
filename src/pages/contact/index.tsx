"use client";

import AppLayout from "@/app/AppLayout";
import { Header } from "@/shared/Header";
import { ContactForm } from "@/widgets/contact/ContactForm";
import { HelpInformationBar } from "@/widgets/HelpInformationBar";
import { Networks } from "@/widgets/Networks";
import { useEffect, useState } from "react";

export default function SignUp () {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        return (
            <AppLayout title="Контакты | CloudDeploy"> 
                <div className="flex flex-col w-[100vw] min-h-[100vh] pb-[50px]">
                    <Header />
                    <div className="flex flex-1 justify-center items-center">
                        <div className="w-full flex justify-center items-center gap-y-[20px] mx-[75px] gap-x-[10px]">
                            <div className="flex-5/6">
                                <ContactForm />
                            </div>
                            <div className="flex flex-1/6 flex-col gap-y-[10px] w-[310px] justify-between">
                                <HelpInformationBar className="bg-[var(--color-black-amber)]" />
                                <Networks className="bg-[var(--color-black-amber)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}