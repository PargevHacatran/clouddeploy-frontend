import { icons } from "./icons";

export interface IOverviewListItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const overviewList: IOverviewListItem[] = [
    {
        icon: icons.rewards,
        title: "Вознагрождения",
        description: "Заработайте на обнаружении критических уязвимостей. Справедливая и прозрачная система вознагрождений.",
    },
    {
        icon: icons.response,
        title: "Быстрые ответы",
        description: "Мы отвечаем на все корректные рапорты об уязвимостях в течении 48 часов и проводим регулярные обновления.",
    },
    {
        icon: icons.hallOfFame,
        title: "Зал Славы",
        description: "Получите признание за свой вклад в обеспечении нашей безопасноти и присоединяйтесь е нашему Залу Славы",
    },
]