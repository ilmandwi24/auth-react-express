import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const NavMenu = ({ onHandleLogout, ...props }) => (
  <NavigationMenu {...props} className="w-full">
    <NavigationMenuList className="w-full flex flex-col items-stretch gap-3">
      {/* <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
      {/* <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild className="w-full" >
          <Button  onClick={onHandleLogout} className="flex flex-col items-center w-64 sm:w-80">
            Logout
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
      
    </NavigationMenuList>
  </NavigationMenu>
);
