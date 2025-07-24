import { IBetaTestValues } from "./betaTestForm";

import Validation from "@/proccesses/Validation";

type ValidationStrategiesType = (values:IBetaTestValues, errors: Record<string, string>) => Record<string, string>;

const validation = new Validation();

export const validationStrategies:ValidationStrategiesType = (values, errors) => {
    if ("email" in values && "name" in values && "lastName" in values && "phone" in values) {
        errors.email = validation.emailValidation(values.email) ?? "";
        errors.name = validation.namesValidation(values.name) ?? "";
        errors.lastName = validation.namesValidation(values.lastName) ?? "";
        errors.phone = validation.phoneValidation(values.phone) ?? "";
    }

    return errors;
}

