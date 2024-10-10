"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../components/ui/sheet"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close the dropdown when the pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
                <CiMenuFries className="text-[35px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <h1 className="text-4xl font-semibold">Felix<span className="text-accent">.</span></h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link
                                href={link.path}
                                className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                                onClick={() => setIsOpen(false)} // Close nav on link click
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
