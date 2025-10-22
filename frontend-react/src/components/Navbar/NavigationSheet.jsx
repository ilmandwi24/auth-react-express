import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./NavMenu";

export const NavigationSheet = ({ onHandleLogout}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 flex flex-col">
        <Logo />
       
        <Button  onClick={onHandleLogout} className="flex flex-col items-center">
            Logout
          </Button>
    
      </SheetContent>
    </Sheet>
  );
};
