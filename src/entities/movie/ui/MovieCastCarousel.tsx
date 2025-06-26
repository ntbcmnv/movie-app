'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel'
import {IMovieCast} from '../types'
import Image from 'next/image'

interface Props {
    cast: IMovieCast['cast'];
}

export default function MovieCastCarousel({cast}: Props) {
    if (!cast || cast.length === 0) return null;

    return (
        <div className="mt-10 mb-6 px-4 sm:px-6 relative max-w-[calc(100vw-32px)] mx-auto">
            <h2 className="text-2xl font-bold mb-4">Актёры</h2>
            <div className="relative">
                <Carousel
                    opts={{
                        align: 'start',
                        slidesToScroll: 'auto',
                    }}
                    className="w-full max-w-[950px] mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {cast.slice(0, 15).map((actor) => (
                            <CarouselItem
                                key={actor.id}
                                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                            >
                                <div className="flex flex-col items-center text-center space-y-2">
                                    {actor.profile_path ? (
                                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                                alt={actor.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                                            Нет фото
                                        </div>
                                    )}
                                    <div className="w-full px-1">
                                        <p className="font-semibold text-sm truncate">{actor.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">{actor.character}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-background/80 hover:bg-background h-10 w-10" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-background/80 hover:bg-background h-10 w-10" />
                </Carousel>
            </div>
        </div>
    );
}