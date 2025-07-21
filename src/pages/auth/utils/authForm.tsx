export interface ISignUpValues {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    username: string;
    jobTitle: string;
    password: string;
}

export interface ILoginValues {
    email: string;
    password: string;
}

export interface IResetValues {
    email: string;
}

export interface ICodeValues {
    code: string;
}

export interface ICreateValues {
    password: string;
    confirmPassword: string;
}

export const AuthValuesInterfaces = {
    "signup": {} as ISignUpValues,
    "login": {} as ILoginValues,
    "reset": {} as IResetValues,
    "code": {} as ICodeValues,
    "create": {} as ICreateValues,
}

export const authFormInputs = {
    "signup": [
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
        [
            {
                labelTitle: "Username",
                placeholder: "@clouddeploy",
                name: "username",
                type: "text",
            },
        ],
        [
            {
                labelTitle: "Job Title",
                placeholder: "Head of Development",
                name: "jobTitle",
                type: "text",
            },
        ],
        [
            {
                labelTitle: "Password",
                placeholder: "*********************",
                visiblePassword: "Enter your password",
                name: "password",
                type: "password",
            },
        ],
    ],
    "login": [
        [
            {
                labelTitle: "Login",
                placeholder: "Enter your email",
                name: "email",
                type: "email",
            },
        ],
        [
            {
                labelTitle: "Password",
                placeholder: "*********************",
                visiblePassword: "Enter your password",
                name: "password",
                type: "password",
            },
        ],
    ],
    "reset": [
        [
            {
                labelTitle: "Login",
                placeholder: "Enter your email",
                name: "email",
                type: "email",
            },
        ],
    ],
    "code": [
        [
            {
                labelTitle: "Code",
                placeholder: "",
                name: "code",
                type: "code",
            },
        ],
    ],
    "create": [
        [
            {
                labelTitle: "New Password",
                placeholder: "*********************",
                visiblePassword: "Enter your new password",
                name: "password",
                type: "password",
            },
        ],
        [
            {
                labelTitle: "Confirm Password",
                placeholder: "*********************",
                visiblePassword: "Re-enter your new password to confirm",
                name: "confirmPassword",
                type: "password",
            },
        ],
    ]
};

export const authFormValues = {
    "signup": {
        name: "",
        lastName: "",
        phone: "",
        email: "",
        username: "",
        jobTitle: "",
        password: "",
    },
    "login": {
        email: "",
        password: ""
    },
    "reset": {
        email: "",
    },
    "code": {
        code: ""
    },
    "create": {
        password: "",
        confirmPassword: ""
    }
};

export const submitButtonContent = {
    "signup": "Create your account",
    "login": "Enter your account",
    "reset": "Continue",
    "code": "Send code",
    "create": "Done"
};