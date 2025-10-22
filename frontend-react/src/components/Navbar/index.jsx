import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

import { NavigationSheet } from "./NavigationSheet";
import { NavMenu } from "./NavMenu";
import { SunIcon } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = ({ onHandleLogout, user}) => {
  return (
    <div className=" ">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />
            {/* Desktop Menu */}
           
            {/* <NavMenu className="hidden md:block" /> */}
          </div>
          <div className="flex items-center gap-3">
            <span>{user?.name}</span>
            <Button onClick={onHandleLogout} className="hidden sm:block">Logout</Button>
            <ThemeToggle/>
            {/* Mobile Menu */}
            <div className="sm:hidden">
              <NavigationSheet onHandleLogout={onHandleLogout}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
