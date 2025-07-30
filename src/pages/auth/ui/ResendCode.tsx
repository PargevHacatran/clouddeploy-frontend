import { useEffect, useState } from "react"

import { Button } from "@/shared/Button";

export const ResendCode = () => {
    const [codeState, setCodeState] = useState<"sended" | "resend">("sended");
    const [untillResend, setUntillResend] = useState<number>(60);

    const timer = () => {
        const timerInterval = setInterval(() => {
            setUntillResend((previousTime) => {
                if (previousTime < 1) {
                    clearInterval(timerInterval);
                    setCodeState("resend");

                    return 60;
                }

                return previousTime - 1;
            })
        }, 1000);

        return () => clearInterval(timerInterval);
    };

    useEffect(() => {
        if (codeState === "sended") timer();      
    }, [codeState, untillResend]);

    return (
        <div>
            <Button
                className="text-[var(--color-white-80)] font-semibold text-[14px] leading-[17px] underline text-start"
                onClick={() => setCodeState("sended")}
                disabled={codeState === "sended"}
            >
                { codeState === "resend" ? "Resend" : "Send code again after " + untillResend }
            </Button>
        </div>
    )
}