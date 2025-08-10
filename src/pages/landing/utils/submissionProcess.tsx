export interface ISubmissionProcess {
    title: string;
    description: string;
}

export const submissionProcess: ISubmissionProcess[] = [
    {
        title: "Обнаружить",
        description: "Найдите уязвимость в нашей системе"
    },
    {
        title: "Отчет",
        description: "Отправьте детализированный отчет через личный кабинет"
    },
    {
        title: "Рассмотрение",
        description: "Наша команда проверит и отсортирует проблему"
    },
    {
        title: "Вознагрождение",
        description: "Получите свой вознагрождение за проделанную работу"
    },
]