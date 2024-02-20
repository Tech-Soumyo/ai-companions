import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";  
import { Sidebar } from "./sidebar";   
export const MobileSidebar = () =>{
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu/>
            </SheetTrigger>
            <SheetContent side= "left" className=" p-0 bg-secondary pt-10 w-32">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}