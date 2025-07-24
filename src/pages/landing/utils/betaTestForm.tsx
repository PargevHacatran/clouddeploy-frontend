export interface IBetaTestValues {
    name: string;
    lastName: string;
    phone: string;
    email: string;
} 

export const betaTestFormInputs = [
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
];

export const betaTestFormValues: IBetaTestValues = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
}