import { Button } from "@/shared/Button"
import { INetworksItem } from "../utils/networksList"
import Link from "next/link"

export const NetworkItem = ({ icon, link, className }: INetworksItem) => {
    return (
        <Button className={`flex flex-1 justify-center items-center p-[25px] rounded-[16px] border-1 border-[var(--color-white-5)] ${className}`}>
            <Link 
                href={link}
                className="relative w-[30px] h-[30px]"
            >
                { icon }
            </Link>
        </Button>
    )
}