import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Image_Slider() {
    const Images_array: string[] = [
        "/slideShow1.6f890b58.jpg",
        "/slideShow2.ce4d5430.jpg",
        "/slideShow4.d9ba1e2d.jpg",
        "/slideShow5.b502aa01.jpg",
        "/slideShow6.03103579.jpg",
        "/slideShow7.9e3fcc75.jpg",
        "/slideShow8.4b79537a.jpg"
    ]

    return (
        <div className="flex justify-center px-4">

            <Carousel className="w-full max-w-7xl">
                <CarouselContent>
                    {Images_array.map((image: string, index: number) => {
                        return <CarouselItem key={index} className="md:basis-1/2 rounded-lg">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                        <Image className="object-cover rounded-lg" src={image} alt={"images"} fill />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
