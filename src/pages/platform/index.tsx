"use client";

import AppLayout from "@/app/AppLayout";
import { Header } from "@/shared/Header";
import { AlternativeSignUoRoute } from "@/widgets/auth/AlternativeSignUpRoute";
import { AuthForm } from "@/widgets/auth/AuthForm";
import { AuthRouteSwitcher } from "@/widgets/auth/AuthRouteSwitcher";
import { AuthTitleBlock } from "@/widgets/auth/AuthTitleBlock";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function SignUp () {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        return (
            <AppLayout title="Регистрация | CloudDeploy"> 
                <Script id="recaptcha" src="https://www.google.com/recaptcha/api.js?render=6Lf-E4QrAAAAAHpZjmihxgUx3mXZZyf9cY5acW17"></Script>

                <div className="flex flex-col w-[100vw] min-h-[100vh] pb-[50px]">
                    <Header />
                    <div className="flex flex-1 justify-center items-center">
                        <div className="max-w-fit flex flex-col justify-center items-center gap-y-[20px]">
                            <AuthTitleBlock />
                            <AuthRouteSwitcher />
                            <AuthForm />
                            <AlternativeSignUoRoute />
                        </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}