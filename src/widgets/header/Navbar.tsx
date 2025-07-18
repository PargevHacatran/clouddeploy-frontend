import { headerNavbar } from "@/pages/public/utils/headerNavbar"

import { NavbarItem } from "@/widgets/header/NavbarItem"

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-x-[20px]">
                {
                    headerNavbar.map((navbarItem, index) => (
                        <NavbarItem 
                            key={index}
                            title={navbarItem.title}
                            href={navbarItem.href}
                        />
                    ))
                }               
            </ul>
        </nav>
    )
}