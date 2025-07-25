import { FooterMainInfo } from "@/widgets/footer/FooterMainInfo";
import { HelpInformationBar } from "@/widgets/HelpInformationBar";
import { Networks } from "@/widgets/Networks";

export const Footer = () => {
  return (
    <footer className="flex gap-x-[20px] mt-[80px] pb-[63px] h-[320px] mb-[100px]">
        <FooterMainInfo />
        <HelpInformationBar />
        <Networks />
    </footer>
  );  
}
