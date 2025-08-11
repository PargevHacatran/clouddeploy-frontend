interface ItariffParametrs {
    cpu: number;
    ram: number;
    disk: number;
    gpu: number;
}

export type ITariffParametrsKeysType = "cpu" | "ram" | "disk" | "gpu"; 

export interface ITariffItem {
    title: string;
    priceRub: number;
    priceUSD: number;
    parametrs: ItariffParametrs
    diskType: "ssd" | "hdd";
    isPopular?: boolean;
    hasYearlyMarker?: boolean;
} 

export const tariffsList: ITariffItem[] = [
    {
        title: "Бесплатный",
        priceRub: 0,
        priceUSD: 0,
        parametrs: {
            cpu: 0.5,
            ram: 2,
            disk: 10,
            gpu: 1,
        },
        diskType: "ssd" 
    },
    {
        title: "Мини",
        priceRub: 99.9,
        priceUSD: 1.25,
        parametrs: {
            cpu: 1,
            ram: 4,
            disk: 32,
            gpu: 2,
        },
        diskType: "ssd",
        hasYearlyMarker: true,
    },
    {
        title: "Базовый",
        priceRub: 249.9,
        priceUSD: 3.13,
        parametrs: {
            cpu: 2,
            ram: 8,
            disk: 64,
            gpu: 4,
        }, 
        diskType: "ssd",
        isPopular: true,
        hasYearlyMarker: true,
    },
    {
        title: "Про",
        priceRub: 549.9,
        priceUSD: 6.89,
        parametrs: {
            cpu: 4,
            ram: 16,
            disk: 96,
            gpu: 8,
        },
        diskType: "ssd",
        hasYearlyMarker: true,
    },
]