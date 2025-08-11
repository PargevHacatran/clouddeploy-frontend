import { SectionTitle } from "@/widgets/SectionTitle"
import { TariffItem } from "./TariffItem"
import { tariffsList } from "@/pages/pricing/utils/tariffsList"

export const PricingTariffs = () => {
        return (
        <section className="py-[50px] w-full">
            <SectionTitle 
                title="Тарифы"
                subtitle="Цены и характеристики за услугу"
            />
            <div className="flex gap-x-[17px] justify-between w-full mt-[50px]">
                {
                    Array.isArray(tariffsList) && tariffsList.map((tariffItem, itemIndex) => (
                        <TariffItem
                            key={itemIndex}
                            title={tariffItem.title}
                            priceRub={tariffItem.priceRub}
                            priceUSD={tariffItem.priceUSD}
                            parametrs={tariffItem.parametrs}
                            diskType={tariffItem.diskType}
                            isPopular={tariffItem.isPopular}
                            hasYearlyMarker={tariffItem.hasYearlyMarker}
                        />
                    ))
                }
            </div>
        </section>
    )
}