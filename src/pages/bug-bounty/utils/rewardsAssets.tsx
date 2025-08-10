export const rewardsTableHeaders =  [
    {
        title: "Серьезность",
        dataParametr: "severity"
    },
    {
        title: "Описание",
        dataParametr: "description"
    },
    {
        title: "Вилка наград",
        dataParametr: "rewardsRange"
    },
]

export const rewardsTableData = [
    {
        severity: "Critical",
        description: "Удаленное выполнение кода, полная компрометация системы",
        rewardsRange: "Индивидуально"
    },
    {
        severity: "High",
        description: "SQL-инъекция, обход авторизации",
        rewardsRange: "Индивидуально"
    },
    {
        severity: "Medium",
        description: "XSS, CSRF, эскалация привелегий",
        rewardsRange: "Индивидуально"
    },
    {
        severity: "Low",
        description: "Раскрытие информации, незначительные проблемы",
        rewardsRange: "Индивидуально"
    },
];