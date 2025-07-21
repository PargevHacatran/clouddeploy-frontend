import { MouseEvent } from "react";

import { icons } from "../utils/icons";

import { Checkbox } from "@/shared/Checkbox";
import AuthRequests from "@/proccesses/auth/AuthRequests";

interface IReCaptchaResponse {
    score: number;
    message: string;
    code: number;
    status: string;
}

export const AuthCaptcha = () => {
    const onClick = (e:MouseEvent) => {
        e.preventDefault();
        
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute("6Lf-E4QrAAAAAHpZjmihxgUx3mXZZyf9cY5acW17", {
                    action: 'submit'
                })
                .then(async (token:string) => {
                   const authRequest = new AuthRequests();

                   const recaptchaResponse = await authRequest.sendRequest<IReCaptchaResponse>({ token: token }, "/api/v1/auth/check-bot?");

                   if (recaptchaResponse && recaptchaResponse.score < 0.35) throw new Error("User is a bot");
                })
                .catch((error) => {
                    console.error(error)
                });
        });
      }

    return (
        <div className="mt-[5px]">
            <div className="grecaptcha w-full p-[13px] bg-[var(--color-white-10)] rounded-[8px] border-1 border-[var(--color-white-5)] flex justify-between items-center">
                <div className="flex items-center gap-x-[6px]">
                    <Checkbox 
                        className="border-2 border-[#555555] bg-[var(--color-white-40)] rounded-[2px] w-[24px] h-[24px]"
                        hasOnClickAnimation={true}
                        onClickAnimation="spinner"
                        animationIcon={icons.spinnerIcon}
                        onClick={(e:MouseEvent<HTMLDivElement>) => onClick(e)}
                    />
                    <p className="text-[var(--color-white-40)] text-[14px] leading-[20px]">I`m not a robot</p>
                </div>
                <div className="flex flex-col gap-y-[8px] justify-center items-center">
                    <div className="relative w-[29px] h-[29px]">
                        { icons.recaptcha }
                    </div>
                    <div className="flex flex-col justify-center text-[#555555] tracking-[-4%]">
                        <p className="text-[10px]">reCAPTCHA</p>

                        <div className="flex justify-between flex-1">
                            <p className="text-[8px]">Privacy</p>
                            <p className="text-[8px]">Terms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}