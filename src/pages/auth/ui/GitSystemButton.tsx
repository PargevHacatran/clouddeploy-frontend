import Link from "next/link";

import { Button } from "@/shared/Button";

interface IGitSystemButton {
    text: string;
    icon: React.ReactNode;
    path: string;
}

export const GitSystemButton = ({ text, icon, path }:IGitSystemButton) => {
    return (
        <div className="flex gap-x-[15px] items-center flex-1 py-[15px] px-[18px] justify-center rounded-[8px] border-1 border-[var(--color-white-12)] bg-[var(--color-black-amber)]">
            <div className="relative w-[22px] h-[22px]">
                { icon }
            </div>
            <Button className="">
                <Link href={`http://localhost:8000/api/v1/auth/${path}`}>{ text }</Link>
            </Button>
        </div>
    )
}