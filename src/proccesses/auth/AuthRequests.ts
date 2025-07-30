import axios from "axios"

class AuthError extends Error {
    public code: number;

    constructor (message:string, code:number) {
        super(message);
        this.code = code;
        this.name = "AuthError";
    }
}

class AuthRequests {
    private readonly API_HOST = "http://localhost:8000";

    private httpQueryBuilder (values:object) {
        let query:string = "";

        const valuesKeys = Object.keys(values);
    
        valuesKeys.forEach((key, index) => {
            query += `${key}=${values[key as keyof typeof values]}${ index !== valuesKeys.length - 1 ? "&" : "" }`;
        });

        return query;
    }

    private handleAuthError (message:string, code:number) {
        console.error(message, code);
        
        return {
            "error": {
                "message": message,
                "code": code
            }
        }
    }

    public async sendRequest<T>(values: object, path: string): Promise<T | undefined> {
        try {
            if (!values) {
                throw new Error("Values should not be undefined");
            }

            const query = this.httpQueryBuilder(values);
            const response = await axios.get(this.API_HOST + path + query);
            const data = response.data;

            if (data.error) throw new AuthError(data.error.message, data.error.code);

            if (data.redirect_url && data.status === "OK") window.location.href = "http://localhost:3000" + data.redirect_url;

            if (data && data.status === "OK") return data as T;

        } catch (error: unknown) {
            if (error instanceof AuthError) this.handleAuthError(error.message, error.code);
            else if (error instanceof Error) this.handleAuthError(error.message, 500);
            else this.handleAuthError("Unknown error occurred", 500);

            throw error; 
        }
    }
}

export default  AuthRequests