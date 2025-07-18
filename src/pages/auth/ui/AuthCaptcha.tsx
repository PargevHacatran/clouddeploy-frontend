import { MouseEvent } from "react";

import { icons } from "../utils/icons";

import { Checkbox } from "@/shared/Checkbox";

export const AuthCaptcha = () => {
    const onClick = (e:MouseEvent) => {
        e.preventDefault();
        
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(process.env.SITE_RECAPTCHA ?? "", {
                    action: 'submit'
                })
                .then((token:string) => {
                    console.log(token)
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