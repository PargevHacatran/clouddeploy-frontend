import Link from "next/link";

import { icons } from "@/pages/public/utils/icons";

import { Navbar } from "@/widgets/header/Navbar";
import { Button } from "@/shared/Button";

export const Header = () => {
    return (
        <header className="py-[20px] px-[74px] flex justify-between items-center w-[100vw] max-w-[100vw]">
            <div className="relative w-[195px] h-[40px]">
                { icons.logo }
            </div>

            <Navbar />

            <div className="flex gap-x-[20px] items-center">
                <Link href="/auth/login" className="text-[var(--color-grey)] font-medium">Log In</Link>

                <Button
                    className="bg-[var(--color-light-black)] py-[10px] px-[24px] rounded-[8px] font-medium"
                    onClick={() => {}}
                >
                    <span className="text-gradient">Get Started</span>
                </Button>
            </div>
        </header>
    );
}