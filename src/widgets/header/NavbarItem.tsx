import Link from "next/link";

interface INavbarItem {
    title: string;
    href: string;
}

export const NavbarItem = ({ title, href }: INavbarItem) => {
    return (
        <li className="text-[var(--color-grey)] font-medium">
            <Link href={href}>{ title }</Link>
        </li>
    );
}