export interface IFooterInfoItem {
    text: string;
    hasLink?: boolean;
    link?: string;
}

export const footerMainInfo: IFooterInfoItem[] = [
    {
        text:  "ИП \"Скориков Егор Андреевич\"",
    },
    {
        text:  "ИНН: 780535753476",
    },
    {
        text:  "Почта: support@clouddeploy.ru",
    },
    {
        text:  "ОРГНИП: 3244704001371111",
    },
    {
        text:  "График: 8:00 - 23:00",
    },
    {
        text:  "Политика конфиденциальности",
        hasLink: true,
        link: "bureaucracy/privacy-policy"
    },
    {
        text:  "Пользовательское соглашение",
        hasLink: true,
        link: "bureaucracy/user-agreement"
    },
    {
        text:  "Cookie",
        hasLink: true,
        link: "bureaucracy/cookie"
    },
]