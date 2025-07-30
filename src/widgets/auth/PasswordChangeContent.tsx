import { icons } from "@/pages/auth/utils/icons";
import { Button } from "@/shared/Button";
import Link from "next/link";

export const PasswordChangeContent = () => {
    return (
        <div className="w-full p-[30px] pb-[40px] radial-gradient rounded-[16px] border-1 border-[var(--color-white-12)] flex flex-col gap-[20px] box-shadow items-center">
            <div className="relative w-[70px] h-[70px]">
                { icons.successPasswordChange }
            </div>

            <div className="flex flex-col gap-y-[10px] items-center">
                <h1 className="text-[var(--color-white-80)] text-[36px] font-medium">Password was changed</h1>
                <p className="text-[var(--color-white-40)] text-center">Your password have been updated. Now you can using your new password for login to system.</p>
            </div>

            <div className="flex w-full flex-col gap-y-[10px] mt-[10px]">
                <Button
                    className="py-[13px] px-[120px] bg-[var(--color-white)] text-[var(--color-black)] rounded-[8px] flex-1"
                    onClick={() => {}}
                >
                    Login to system
                </Button>
                <Button
                    className="bg-[var(--color-light-black)] rounded-[8px] font-medium py-[13px] px-[120px] flex-1"
                    onClick={() => {}}
                >
                    Back to main
                </Button>
            </div>

            <hr className="w-full border-[var(--color-white-40)] my-[10px]" />

            <p className="text-[var(--color-white-40)] text-center">
                If you will have a problem you can write to 
                <Link className="text-[var(--color-white-60)]" href="/contact"> support service</Link>
            </p>
        </div>
    );
}