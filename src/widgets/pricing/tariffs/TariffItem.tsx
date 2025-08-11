import { Marker } from "@/pages/pricing/ui/Marker";
import { TariffParametr } from "@/pages/pricing/ui/TariffParametr";
import { ITariffItem, ITariffParametrsKeysType } from "@/pages/pricing/utils/tariffsList";
import { Button } from "@/shared/Button";
import { Toggle } from "@/shared/Toggle";
import { useState } from "react";

const DISCOUNT = 0.15;

export const TariffItem = ({ title, priceRub, parametrs, diskType, isPopular, hasYearlyMarker }: ITariffItem) => {
    const [isYearlyToggle, setIsYearlyToggle] = useState<boolean>(false);
    
    const parmetrsKeys: ITariffParametrsKeysType[] = Object.keys(parametrs);

    const calculatePriceWithDiscount = (price: number) => (price * (1 - DISCOUNT)).toFixed(2);

    return (
        <div className={`flex-1 flex flex-col gap-y-[17px] p-[30px] rounded-[16px] border-1 border-[var(--color-white-5)] ${ isPopular ? "radial-bottom-gradient" : "" }`}>
            <div className="flex flex-1 justify-between items-center">
                <div className="flex gap-x-[5px] items-center">
                    <h3 className="text-[24px] leading-[30px] tracking-[-0.2px]">{ title }</h3>
                    {
                        isPopular ?
                            <Marker>Популярно</Marker>
                            : null
                    }
                </div>
                <div>
                    {
                        hasYearlyMarker ?
                            <div className="flex items-center gap-x-[5px]">
                                <div>
                                    <p className="uppercase text-[var(--color-white-60)] text-[8px] leading-[8px] tracking-[0.24px] font-bold">Год</p>
                                </div>
                                <Toggle 
                                    onChange={() => setIsYearlyToggle(!isYearlyToggle)}
                                    isActive={isYearlyToggle}
                                />
                            </div>
                            : null

                    }
                </div>
            </div>
            <div className="flex justify-between">
                <p className="w-3/5 text-[var(--color-white-60)] text-[17px] leading-[28px] tracking-[-0.2px]">
                    Цена тарифа
                    <span className="text-[var(--color-white)]"> { isYearlyToggle ? calculatePriceWithDiscount(priceRub * 12) : priceRub }₽ </span> 
                    / { isYearlyToggle ? "год" : "месяц"}
                </p>
                <div className="mt-[5px]">
                    {
                        isYearlyToggle && hasYearlyMarker ?
                            <Marker>Выгода 15%</Marker>
                            : null
                    }
                </div>
            </div>
            <div>
                {
                    Array.isArray(parmetrsKeys) && parmetrsKeys.map((parametr: ITariffParametrsKeysType, parametrIndex: number) => (
                            <TariffParametr 
                                key={parametrIndex}
                                value={parametrs[parametr as keyof typeof parametrs]}
                                name={parametr}
                                addictionalDescription={parametr === "disk" ? diskType : parametr}
                            />
                        ))
                }
            </div>
            <div>
                <Button
                    className="bg-[var(--color-grey-35)] rounded-[8px] py-[8px] text-[14px] eading-[20px] tracking-[-0.2px] flex justify-center items-center w-full"
                >
                    Купить
                </Button>
            </div>
        </div>
    );  
}