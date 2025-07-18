import { Input } from "@/shared/Input";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export interface IAuthCode {
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
    addictionalStyles: object;
}

export const AuthCode = ({ onChange, name, value, addictionalStyles }:IAuthCode) => {    
    const [code, setCode] = useState<string[]>(Array(6).fill(""));
    const codeInputsRef = useRef<HTMLDivElement>(null);
    
    const userEamil = "pargevhacatran1@gmail.com";

    useEffect(() => {
        if (value && value.length === code.length) {
            setCode(value.split(""));
        }
    }, [value])

    const focusNewInput = (newInputIndex?:number) => {
        if (newInputIndex !== undefined && codeInputsRef && codeInputsRef.current && newInputIndex < code.length && newInputIndex >= 0) {
            const newInput = codeInputsRef.current.children[newInputIndex];
            const newInputField = newInput.children[1] as HTMLElement;

            newInputField.focus(); 
        }
    }

    const handleCodeChange = (index:number, e:ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>, newInputIndex?:number) => {
        const newCode = [...code];
        newCode[index] = e.currentTarget.value;
        setCode(newCode);

        focusNewInput(newInputIndex);
                
        const fakeEvent = {
            target: {
                name: name, 
                value: code.join("")
            }
        } as ChangeEvent<HTMLInputElement>;

        onChange(fakeEvent);
    }

    const setCodePart = (index:number, e:ChangeEvent<HTMLInputElement>) => {
        const newInputIndex = index + 1;

        if (index < code.length) {
            handleCodeChange(index, e, newInputIndex);
        }
    }

    const changeNextInput = (index:number, e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index]) {
            if (index >= 0 && codeInputsRef && codeInputsRef.current) {
                e.preventDefault();

                const newInputIndex = index - 1;

               handleCodeChange(index - 1, e, newInputIndex);
            }
        }  else if (code[index]) {
            handleCodeChange(index - 1, e);
        };
    }

    const hiddenUserEmail = (userEmail:string) => {
        try {
            if (userEamil) {
                const hiddenSubstring = userEamil.split("@")[0].slice(3);
                const replacedHiddenPart = hiddenSubstring.replace(/[A-Za-z0-9]/g, "*");
            
                return userEmail.replace(hiddenSubstring, replacedHiddenPart);
            } else {
                throw new Error("User email is not found");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input 
                value={code.join("")} 
                className="hidden" 
                name={name}
                onChange={(e) => onChange(e)}
            />

            <div className="flex flex-col gap-y-[10px] mb-[10px]">
                <h2 className="font-semibold text-[20px] leading-[17px] text-[var(--color-white-80)]">Enter your verification code</h2>
                <p className="text-[var(--color-white-40)]">We sent a 6-digit code to <span className="text-[var(--color-white-60)]">{ hiddenUserEmail(userEamil) }</span>. Confirm it belongs to you to keep your account secure</p>
            </div>

            <div 
                className="grid grid-cols-6 gap-x-[13px]"
                ref={codeInputsRef}
            >
                {
                    [...Array(6)].map((_, index) => (
                        <Input  
                            key={index}
                            type="text"
                            value={code[index]}
                            onChange={(e) => setCodePart(index, e)}
                            onKeyDown={(e) => changeNextInput(index, e)}
                            className=""
                            areaClassName="max-w-full text-center bg-[var(--color-white-10)] password-wrapper text-[var(--color-white-40)] py-[10px] px-[12px] rounded-[8px] border-1 border-[var(--color-white-5)] outline-none"
                            placeholder=""
                            maxLength={1}
                            addictionalStyles={addictionalStyles}
                        />
                    ))
                }
            </div>
        </div>
    )
}