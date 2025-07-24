import * as punycode from "punycode";
import * as tldData from "../pages/public/utils/tld.json";
import { isValidPhoneNumber, validatePhoneNumberLength } from "libphonenumber-js";
import { parsePhoneNumber } from "libphonenumber-js/min";

class Validation {
    constructor () {
        return this;
    };

    private readonly MIN_EMAIL_SIZE = 6; // минимальая длинна почты
    private readonly MAX_EMAIL_SIZE = 64; // максимальная длина почты
    private readonly MIN_NAME_SIZE = 2; // минимальная длина имени и фамилии
    private readonly MAX_NAME_SIZE = 50; // максимальная длина имени и фамилии
    private readonly MIN_USERNAME_SIZE = 3; // минимальная длина никнейма
    private readonly MAX_USERNAME_SIZE = 30; // максимальная длина никнейма
    private readonly MIN_PASSWORD_SIZE = 6; // минимальная длина пароля
    private readonly MAX_PASSWORD_SIZE = 32; // максимальная длина пароля

    private readonly DOMAIN_REGEX = /^([a-z0-9-]+\.)*[a-z0-9-]+\.[a-z]{2,}$/i; // регулярное выражениие для проверки домена
    private readonly LOCAL_PART_REGEX = /^[а-яА-Яa-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+$/; // регулярное выражение для проверки локальной части почты
    private readonly NAME_REGEX = /^(?![-\s'])([a-zA-Zа-яА-ЯёЁéüçÉÜÇ\s'-])+(?<![-\s'])$/u; // регулярное выражение для проверки имени и фамилии 
    private readonly USERNAME_REGEX = /^[a-zA-Z0-9_\-\.@]+$/; // регулярное выражение для проверки имени пользователя
    private readonly PASSWORD_REGEX = /^[a-zA-Z0-9_!@#$%^.*]+$/; // регулярное выражение для проверки пароля
    private readonly SQL_DANGEROUS_SYMBOLS_REGEX = /['";\\\0]/; // регулярное выражение для выявления подозрительных символов при валидации от sql-инъекции
    private readonly SQL_DANGEROUS_COMBINATIONS_REGEX = /(-\s|'\s|\s{2,}|-'|'')/; // регулрное выражение для выявления подозрительныз комбинаций при валидации от sql-инъекции

    private isTldValid (tld:string) {
        return Object.entries(tldData).some(([key, value]) => {
            const normalizeKey = typeof key === "string" ? key.toLowerCase() : String(key).toLowerCase();
            const normalizeValue = typeof value === "string" ? value.toLowerCase() : String(value).toLowerCase();

            return tld.toLowerCase() === normalizeKey|| tld.toLowerCase() === normalizeValue;
        })
    }

    private normalizeDomain (domain:string) {
        return /[^\x00-\x7f]/.test(domain)
            ? punycode.toASCII(domain)
            : domain.toLowerCase();
    }

    private secureFromSQLInjection (data:string) {
        if (this.SQL_DANGEROUS_SYMBOLS_REGEX.test(data)) throw new Error("Invalid. Dangerous symbols detected");
        if (this.SQL_DANGEROUS_COMBINATIONS_REGEX.test(data)) throw new Error("Invalid. Not allowed combination of spaces/hyphen/apostrophe");
    }

    // валидация почты

    public emailValidation (email:string) {
        const currentPartsCount = 2; // валдное количество частей у почты или её частей после сплита
        
        try {
            if (email) {
                if (email.split("@").length != currentPartsCount) {
                    throw new Error("To many @");
                } else {
                    const [localePart, domain] = email.split("@");
                    const normalizeDomain = this.normalizeDomain(domain);

                    const tld:string = normalizeDomain.split(".").pop() || "";

                    // Проверка домена почты

                    if (!domain) throw new Error("Domain is empty");

                    const domainParts = normalizeDomain.split(".");

                    if (normalizeDomain.length > 253 || normalizeDomain.length < 3) throw new Error("Domain length incurrent") 
                    if (domainParts.some(part => part.length > 63)) throw new Error("Subdomain length too long");
                    if (!this.DOMAIN_REGEX.test(normalizeDomain)) throw new Error("Invalid email. You use unexpecteble symbols");

                    const isTldValid = this.isTldValid(tld);

                    if (!isTldValid) throw new Error("Invalid email. Invalid tld");
                    

                    // Проверка локальной части почты

                    if (localePart.length < this.MIN_EMAIL_SIZE || localePart.length > this.MAX_EMAIL_SIZE) throw new Error("Invalid email. Locale part length is not valid.");
                    if (!this.LOCAL_PART_REGEX.test(localePart)) throw new Error("Invalid email. You use unexpecteble symbols");
                    if (/\s/.test(localePart) || /\s/.test(domain)) throw new Error("Invalid email. Email should not include space");

                    return ""; 
                }   
            } else {
                throw new Error("Required");
            }
        } catch(error:unknown) {
            const message = error instanceof Error
                ? error.message
                : typeof error === "string" 
                    ? error
                    : "unknown error";

            return message;
        }
    }

    // валидация имени и фамилия

    public namesValidation (name:string) {
        try {
            if (name) {
                const normalizedName = name.trim().replace(/\s+/g, " ").normalize("NFC");

                if (!this.NAME_REGEX.test(normalizedName)) throw new Error("Invalid. Let only letters, space, hyphen and apostrophe");
                if (normalizedName.length < this.MIN_NAME_SIZE || normalizedName.length > this.MAX_NAME_SIZE) throw new Error("Size incurrent");
                        
                this.secureFromSQLInjection(normalizedName);

                return "";
            } else {
                throw new Error("Required");
            }
        } catch (error:unknown) {
            const message = error instanceof Error 
                ? error.message
                : typeof error === "string"
                    ? error
                    : "unknown error";

            return message;
        }
    }

    public usernameValidation (username:string) {
        try {
            if (username) {
                if (!username.trim()) throw new Error("Username should not be empty");
                
                username = username.replace(/@/g, "");

                const normalizedUsername = username.trim().replace(/\s@/g, " ");

                if (!this.USERNAME_REGEX.test(normalizedUsername)) throw new Error("You use unexpectable symbols");
                if (normalizedUsername.length < this.MIN_USERNAME_SIZE || normalizedUsername.length > this.MAX_USERNAME_SIZE) throw new Error("Incurrent size");
                
                this.secureFromSQLInjection(normalizedUsername);

                return "";
            } else {
                throw new Error("Username should not be empty");
            }
        } catch (error:unknown) {
            const message = error instanceof Error 
                ? error.message
                : typeof error === "string"
                    ? error
                    : "unknown error";

            return message;
        }
    }

    public phoneValidation (phone:string) {
        try {
            if (phone) {
                if (!phone.trim()) throw new Error("Phone should not be empty");
                
                const digitsOnly = phone.replace(/\D/g, "");
                const normalizedPhone = `+${digitsOnly}`;
                const parsePhone = parsePhoneNumber(`${normalizedPhone}`);
                const formatedPhoneNumer = parsePhone.formatInternational(); 

                const validatePhoneLength = validatePhoneNumberLength(formatedPhoneNumer) === undefined;
                const isValidPhone = isValidPhoneNumber(formatedPhoneNumer);

                if (!validatePhoneLength) throw new Error("Incurrent phone number length");
                if (!isValidPhone) throw new Error("Incurrent phone number digit cominations");

                return "";
            } else {
                throw new Error("Phone should not be empty");
            }
        } catch (error:unknown){
            const message = error instanceof Error
                ? error.message
                : typeof error === "string"
                    ? error
                    : "unknown error";

            return message;
        }
    }

    public passwordValidation (password:string) {
        try {   
            if (password) {
                if (!password.trim()) throw new Error("Password con not be empty");

                const normalizedPassword:string = password.trim().replace(/\s/, " ");

                if (normalizedPassword.length < this.MIN_PASSWORD_SIZE || normalizedPassword.length > this.MAX_PASSWORD_SIZE) throw new Error("Password length incurrent");
                if (!this.PASSWORD_REGEX.test(normalizedPassword)) throw new Error("Password include unexpected symbols");

                if (!/[a-z]/.test(normalizedPassword)) throw new Error("Password should include minimum 1 lowercase letter");
                if (!/[A-Z]/.test(normalizedPassword)) throw new Error("Password should include minimum 1 uppercase letter");
                if (!/[0-9]/.test(normalizedPassword)) throw new Error("Password should include minimum 1 number");
                if (!/[_!@#$%^.*]/.test(normalizedPassword)) throw new Error("Password should include minimum 1 special symbol");

                this.secureFromSQLInjection(normalizedPassword);

                return "";
            } else {
                throw new Error("Password can not be empty");
            }
        } catch (error:unknown) {
            const message = error instanceof Error 
                ? error.message
                : typeof error === "string"
                    ? error
                    : "unknown error";
                    
            return message;
        }
    }
}

export default Validation;