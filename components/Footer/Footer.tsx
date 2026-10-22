import FooterLine from "./FooterLine";
import FooterLink from "./FooterLinks";
import FooterLogo from "./FooterLogo";

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white p-4">
            <FooterLogo />
            <FooterLink />
            <FooterLine />
        </footer>
    )
}