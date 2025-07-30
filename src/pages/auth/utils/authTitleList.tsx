import { AuthTabsType } from "@/widgets/auth/AuthForm";

type AuthTitleKeysType = AuthTabsType | "default";

interface IAuthTitleListItem {
    title: string;
    description: string;
}

type AuthTitleListType = {
    [key in AuthTitleKeysType]: IAuthTitleListItem; 
} 

export const authTitleList:AuthTitleListType = {
    signup: {
        title: "Welcome!",
        description: "Deploy, manage, and scale your applications effortlessly. \nStart building on CloudDeploy today!"
    },
    login: {
        title: "Welcome back!",
        description: "We’re happy to see you again. \nPlease log in to continue."
    },
    reset: {
        title: "Forgot your password?",
        description: "Enter your nickname, email, or phone number to reset it."
    },
    code: {
        title: "Confirm your email",
        description: "Confirm your email address for continue."
    },
    create: {
        title: "Create a new password",
        description: "Enter your nickname, email, or phone number to reset it."
    },
    default: {
        title: "Welcome!",
        description: "Deploy, manage, and scale your applications effortlessly. \nStart building on CloudDeploy today!"
    }
};