declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void,
            execute: (siteKey:string, options: { action: string }) => Promise<string>,
            then: (callback: (token: string) => void) => void
        }
    }
}

export {};