"use client"

import Link from "next/link"

import AmuletCard from "../../components/itemCards/AmuletCard"
import BeltCard from "../../components/itemCards/BeltCard"
import BodyCard from "../../components/itemCards/BodyCard"
import BootsCard from "../../components/itemCards/BootsCard"
import FlasksCard from "../../components/itemCards/FlasksCard"
import GloveCard from "../../components/itemCards/GloveCard"
import HelmetCard from "../../components/itemCards/HelmetCard"
import JewelCard from "../../components/itemCards/JewelCard"
import RingCard from "../../components/itemCards/RingCard"
import WeaponCard from "../../components/itemCards/WeaponCard"

import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2,
} from "lucide-react"


import { Button } from "../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import PobInputCard from "../../components/PobInputCard";
import SumaryCard from "../../components/SumaryCard";
import TotalCostCard from "../../components/TotalCostCard";
import TradeConditionContainer from "../../components/TradeConditionContainer";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h1 className="hidden md:flex">
                        pob build cost
                    </h1>

                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
                        <PobInputCard />
                        <TradeConditionContainer/>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3">
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Helmet
                            </h2>
                            <div className="grid grid-cols-subgrid gap-4 col-span-3">
                                <HelmetCard/>
                            </div>
                            {/* Weapon Body SubWeapon*/}
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Weapons, Body
                            </h2>
                                <WeaponCard/>
                                <BodyCard/>
                            {/* Belt */}
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Glove, Belt, Boots
                            </h2>
                            <div className="grid grid-cols-subgrid gap-4 col-span-1">
                                <GloveCard/>
                            </div>
                            <div className="grid grid-cols-subgrid gap-4 col-span-1">
                                <BeltCard/>
                            </div>
                            <div className="grid grid-cols-subgrid gap-4 col-span-1">
                                <BootsCard/>
                            </div>
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Accessories
                            </h2>
                            {/* Rings Amulet */}
                            <AmuletCard/>
                            <RingCard/>
                            {/* Jewels */}
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Jewels
                            </h2>
                            <div className="grid grid-cols-subgrid gap-4 col-span-3">
                            <JewelCard/>
                            </div>
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 col-span-full ">
                                Flasks
                            </h2>
                            <FlasksCard/>
                        </div>
                    </div>
                    <div>
                        <SumaryCard/>
                        <TotalCostCard/>
                    </div>
                </main>
            </div>
        </div>
    )
}
