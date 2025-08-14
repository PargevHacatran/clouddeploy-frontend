"use client";

import { Button } from "@/shared/Button";
import { Footer } from "@/shared/Footer";
import { Header } from "@/shared/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound () {
    const router = useRouter();
    
    return (
        <div>
            <Header />
            <div className="flex justify-center py-[50px]">
                <div className="max-w-[1260px] flex gap-x-[50px]">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-[350px] h-[500px]">
                            <Image 
                                src="/404-image.png"
                                alt=""
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-y-[17px]">
                        <h1 className="text-[80px] text-[var(--main-color)] font-bold leading-[110px] tracking-[-2px]">404</h1>
                        <p className="text-[36px] leading-[48px] tracking-[-1px] text-[var(--color-white)] font-medium">Страница не найдена!</p>
                        <p className="text-[20px] leading-[28px] text-[var(--color-white-60)] whitespace-nowrap tracking-[-1px]">Что-то пошло не так. Вернитесь на <Link href="/">Главную</Link> и попробуйте снова!</p>
                        <Button
                            className="bg-[var(--color-white)] text-[var(--color-black)] py-[12px] px-[30px] rounded-[16px] text-[17px] max-w-fit"
                            onClick={() => router.push("/")}
                        >
                            Вернуться на клавную
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>      
    );
} 