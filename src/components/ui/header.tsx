"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, ShoppingBag, PhoneCall } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Header1Props {
    cartCount?: number;
    onOpenCart?: () => void;
    onOpenContact?: () => void;
}

function Header1({ cartCount = 0, onOpenCart, onOpenContact }: Header1Props = {}) {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Product",
            description: "Curated SS26 atelier fashion & avant-garde seasonal couture collections.",
            items: [
                {
                    title: "Men's Collection",
                    href: "#men",
                },
                {
                    title: "Women's Collection",
                    href: "#women",
                },
                {
                    title: "Architectural Showcase",
                    href: "#lookbook",
                },
                {
                    title: "Atelier 3D Configurator",
                    href: "#fighter-select",
                },
            ],
        },
        {
            title: "Company",
            description: "Crafted with precision, architectural tailoring and sustainable luxury.",
            items: [
                {
                    title: "About ZUDIO",
                    href: "#ethos",
                },
                {
                    title: "Atelier Runway",
                    href: "#collections",
                },
                {
                    title: "Community",
                    href: "#community",
                },
                {
                    title: "Contact Atelier",
                    href: "#newsletter",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur border-b border-border">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 sm:px-8">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost">{item.title}</Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-popover text-popover-foreground shadow-2xl rounded-xl border border-border">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-semibold">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-8 bg-neutral-900 text-white hover:bg-neutral-800">
                                                            Explore Collection
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-3 rounded transition-colors"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-bodoni text-xl sm:text-2xl font-bold tracking-[0.2em] text-foreground uppercase">
                        ZUDIO
                    </p>
                </div>
                <div className="flex justify-end w-full gap-3 sm:gap-4 items-center">
                    {/* Contact Icon & Button */}
                    <Button 
                        variant="ghost" 
                        className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                        onClick={onOpenContact}
                    >
                        <PhoneCall className="w-4 h-4" />
                        <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider">Contact</span>
                    </Button>
                    <div className="border-r h-6 hidden md:inline border-border"></div>
                    {/* Add To Bag Icon & Button */}
                    <Button 
                        variant="outline" 
                        className="flex items-center gap-2 relative cursor-pointer border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
                        onClick={onOpenCart}
                    >
                        <ShoppingBag className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">Bag</span>
                        {cartCount > 0 && (
                            <span className="bg-neutral-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans ml-1">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-6 px-6 z-50">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center py-1"
                                            >
                                                <span className="text-base font-medium">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-base font-semibold">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center py-1 pl-2 text-sm"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
