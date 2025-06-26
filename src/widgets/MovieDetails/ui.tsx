'use client'

import Loader from '@/shared/ui/Loader';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import MovieCastCarousel from '@/entities/movie/ui/MovieCastCarousel';
import BackButton from '@/features/navigation/BackButton';
import Image from 'next/image';
import useMovieDetails from '@/shared/hooks/useMovieDetails';
import {useEffect} from 'react';
import {toast} from 'sonner';

dayjs.locale('ru')

export default function MovieDetails() {
    const {
        data,
        isLoading,
        credits,
        error,
    } = useMovieDetails();

    useEffect(() => {
        if (error) {
            toast.error('Произошла ошибка при загрузке информации о фильме.');
        }
    }, [error]);

    if (isLoading) return <Loader/>;

    if (!data) return (
        <div className="container flex flex-col items-center mt-6">
            <p className="font-bold text-lg text-muted-foreground">Фильм не найден.</p>
        </div>
    );

    return (
        <div className="container mx-auto p-6 max-w-[900px]">
            <BackButton/>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="flex items-center justify-center sm:min-h-[500px]">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                        className="rounded-lg max-w-xs max-h-[500px]"
                        width={500}
                        height={500}
                    />
                </div>

                <div className="p-5">
                    <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                    <div className="mb-4">
                        {data.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="inline-block mr-2 mb-2 rounded text-white font-semibold bg-slate-500 px-3 py-1 text-sm"
                            >{genre.name}</span>
                        ))}
                    </div>
                    <p className="mb-4">{data.overview}</p>
                    <p className="mb-4 text-muted-foreground text-base">Дата
                        выхода: {dayjs(data.release_date).format('D MMMM YYYY')}</p>
                    <p className="font-semibold">Рейтинг: {data.vote_average}</p>
                </div>
            </div>

            <MovieCastCarousel cast={credits?.cast}/>
        </div>
    );
}