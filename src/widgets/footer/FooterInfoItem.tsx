import { IFooterInfoItem } from "@/pages/public/utils/footerMainInfo";
import Link from "next/link";

export const FooterInfoItem = ({ text, hasLink, link }: IFooterInfoItem) => {
    return (
        <div className="text-[14px] text-[var(--color-white-60)] leading-[20px] tracking-[-0.2px] text-center">
            {
                hasLink && link ?
                    <Link href={link}>{ text }</Link>
                    : <p>{ text }</p>
            }
        </div>
    );
}