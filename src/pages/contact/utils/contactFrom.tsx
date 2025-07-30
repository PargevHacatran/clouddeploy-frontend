export interface IInputItem {
    labelTitle: string;
    placeholder: string;
    name: string;
    type: string;
}

export const contactFormInputs:IInputItem[][] = [
    [
        {
            labelTitle: "First Name",
            placeholder: "Ivan",
            name: "name",
            type: "text",
        },
        {
            labelTitle: "Last Name",
            placeholder: "Ivanov",
            name: "lastName",
            type: "text",
        }
    ],
    [
        {
            labelTitle: "Company",
            placeholder: "CloudDeploy",
            name: "company",
            type: "text",
        },
        {
            labelTitle: "Job Title",
            placeholder: "Head of Development",
            name: "jobTitle",
            type: "text",
        }
    ],
    [
        {
            labelTitle: "Phone",
            placeholder: "+7",
            name: "phone",
            type: "text",
        },
        {
            labelTitle: "Email",
            placeholder: "team@clouddeploy.com",
            name: "email",
            type: "email",
        }
    ],
    [
        {
            labelTitle: "How can we help you?",
            placeholder: "Tell more details about your needs",
            name: "problem",
            type: "text",
        }
    ]
];

export const contactFormValues = {
    name: "",
    lastName: "",
    company: "",
    jobTitle: "",
    phone: "",
    email: "",
    problem: ""
}