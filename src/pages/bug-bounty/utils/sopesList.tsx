import { icons } from "./icons";

type ScopeType = "inScope" | "outScope";

export interface IScopeListItem {
    icon: React.ReactNode;
    title: string;
    items: string[];
}

type ScopeListType = {
    [key in ScopeType]: IScopeListItem;
}

export const scopesList: ScopeListType = {
    "inScope": {
        icon: icons.inScope,
        title: "В рамках",
        items: [
            "Основная платформа",
            "API методы и система авторизации",
            "Интерфейсы дашбордов и панели управления",
            "Тикет-система",
            "Конфигуратор кастомных серверов",
            "Деплой ПО разных типови размеров",
            "CSRF",
            "DoS и DDoS",
            "XSS",
            "SQL-инъекция",
            "Реверс-инженеринг"
        ]
    },
    "outScope": {
        icon: icons.outScope,
        title: "За рамками",
        items: [
            "Сторонние сервисы и интеграции",
            "Атаки с использованием социльной инженерии",
            "Тестирование физической безопасности",
            "Атаки типа \"Отказ от обслуживания\"",
            "Ошибки в UI/UX",
            "Работа с банковской системой"
        ]
    }
};