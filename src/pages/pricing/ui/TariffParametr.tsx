import { icons } from "../utils/icons";
import { ITariffParametrsKeysType } from "../utils/tariffsList";

interface ITariffParametr {
    value: number;
    name: ITariffParametrsKeysType;
    addictionalDescription?: string;
}

export const TariffParametr = ({ value, name, addictionalDescription }: ITariffParametr) => {
    return (
        <div className="flex items-center gap-x-[10px]">
            <div className="relative w-[20px] h-[20px]">
                { icons.tariffMarker }
            </div>
            <div>
                <p className="leading-[28px] tracking-[-0.2px]">{ value } { name !== "cpu" ? `GB ${ addictionalDescription?.toUpperCase() ?? "" }` : name.toUpperCase() }</p>
            </div>
        </div>
    );
}