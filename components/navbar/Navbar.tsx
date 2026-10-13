import NavActionsBtn from "./NavActionsBtn";
import NavbarMenu from "./NavbarMenu";
import NavLogo from "./NavLogo";

export default function Navbar(){
    return( 
        <nav className="p-3 bg-secondary grid grid-cols-2 lg:grid-cols-3 gap-4 " >
            <NavLogo />
            <NavActionsBtn/>
            <NavbarMenu />
        </nav>
    )
}