"use client";

import AppLayout from "@/app/AppLayout";
import { Header } from "@/shared/Header";
import { PasswordChangeContent } from "@/widgets/auth/PasswordChangeContent";
import { useEffect, useState } from "react";

export default function SuccessPasswordChange () {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        return (
            <AppLayout title="Регистрация | CloudDeploy"> 
                <div className="flex flex-col w-[100vw] min-h-[100vh] pb-[50px]">
                    <Header />
                    <div className="flex flex-1 justify-center items-center">
                        <div className="w-[540px] flex flex-col justify-center items-center gap-y-[20px]">
                            <PasswordChangeContent />
                        </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}