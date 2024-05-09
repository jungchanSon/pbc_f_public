import * as React from "react";
import {
    Calculator,
    ChevronRight, CircleHelp,
    Home,
    LineChart,
    Package,
    Package2, PackagePlus,
    Settings,
    ShoppingCart,
    Users2
} from "lucide-react";
import {PaginationLink} from "./ui/pagination";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./ui/tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {ModeToggle} from "./DarkModeButton";

const Aside = ({
                            className,
                            ...props
                        }: React.ComponentProps<typeof TooltipPrimitive.Content>) => (
    <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Home className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Home</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/how"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <CircleHelp className="h-5 w-5" />
                            <span className="sr-only">how to use</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">how to use</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/calc"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Calculator className="h-5 w-5" />
                            <span className="sr-only">calculator build</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">calculator build</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/news"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <PackagePlus className="h-5 w-5" />
                            <span className="sr-only">what&apos;s new</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">what&apos;s new</TooltipContent>
                </Tooltip>

                <ModeToggle/>

            </nav>
        </aside>
    </TooltipProvider>

)
Aside.displayName = "PaginationNext"

export {Aside}