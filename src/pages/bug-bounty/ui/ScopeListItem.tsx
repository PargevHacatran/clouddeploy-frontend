import { icons } from "../utils/icons";

interface IScopeListItem {
    children: React.ReactNode;
}

export const ScopeListItem = ({ children }: IScopeListItem) => {
    return (
        <li className="flex gap-x-[5px] items-center text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px]">
            <div className="relative w-[5px] h-[5px]">
                { icons.listItemMarker }
            </div>

            { children }
        </li>
    );
}