"use client"

import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import  {UserButton}  from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle";
import {MobileSidebar} from "@/components/mobileSidebar";


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});


export const Navbar = () =>{
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
               <MobileSidebar/>
                <Link href="/">
                   <h1 className={cn(
                    "hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                    )}> Valentine AI </h1> 
                </Link>   
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                <Sparkles/>
                </Button>
                <ModeToggle/>
                <UserButton />

            </div>
        </div>
    )
}