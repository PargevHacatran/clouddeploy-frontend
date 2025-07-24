export interface IFooterInfoItem {
    text: string;
    hasLink?: boolean;
    link?: string;
}

export const footerMainInfo: IFooterInfoItem[] = [
    {
        text:  "IE \"Скориков Егор Андреевич\"",
    },
    {
        text:  "TIN: 780535753476",
    },
    {
        text:  "Email: support@clouddeploy.ru",
    },
    {
        text:  "Phone: +7 993 967-89-19",
    },
    {
        text:  "PSRN: 3244704001371111",
    },
    {
        text:  "Work schedule: 8:00 - 23:00",
    },
    {
        text:  "Privacy Policy",
        hasLink: true,
        link: "bureaucracy/privacy-policy"
    },
    {
        text:  "User Agreement",
        hasLink: true,
        link: "bureaucracy/user-agreement"
    },
    {
        text:  "Cookie",
        hasLink: true,
        link: "bureaucracy/cookie"
    },
]