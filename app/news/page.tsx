import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <span className="text-4xl font-mono">
                        How to use
                    </span>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                            <Card
                                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle>1. Install Poe build cost chrome extension</CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        To calculate the total build cost, install the POE (Path of Exile) Chrome extension
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link href={"https://poe.ninja"} target={"_blank"}>
                                        <Button>Chrome Extension</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card
                                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle>2. Input PoB code in Poe.ninja</CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        Input a Path of Building (PoB) code you found on poe.ninja
                                    </CardDescription>
                                    <CardDescription>
                                        <Image
                                            src={"/img.png"}
                                            width="600"
                                            height="200"
                                            alt="poeninja example"
                                        />
                                    </CardDescription>

                                </CardHeader>
                                <CardFooter>
                                    <Link href={"https://poe.ninja"} target={"_blank"}>
                                        <Button>Go to poe.ninja</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card
                                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle>3. Check search option, and submit</CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        Check search option, and submit.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
