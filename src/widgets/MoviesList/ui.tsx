'use client';

import {Button} from '@/components/ui/button'
import {IMovie} from '@/entities/movie/types';
import {MovieCard} from '@/entities/movie/ui/MovieCard';
import Loader from '@/shared/ui/Loader';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import useMoviesList from '@/shared/hooks/useMoviesList';
import {useEffect} from 'react';
import {toast} from 'sonner';

export function MoviesListWidget() {
    const {
        data,
        isLoading,
        error,
        isFetching,
        page,
        router,
    } = useMoviesList();

    useEffect(() => {
        if (error) {
            toast.error('Произошла ошибка при загрузке фильмов.');
        }
    }, [error]);

    if (isLoading) return <Loader/>;

    if (!data) return (
        <div className="container flex flex-col items-center mt-6">
            <p className="font-bold text-center text-lg text-muted-foreground">Фильмы не найдены!</p>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.map((movie: IMovie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
                <Button onClick={() => router.push(`/?page=${page - 1}`)} disabled={page === 1}>
                    <ArrowLeft className="h-6 w-6"/> Назад
                </Button>
                <Button onClick={() => router.push(`/?page=${page + 1}`)} disabled={isFetching}>
                    Вперёд <ArrowRight className="h-6 w-6"/>
                </Button>
            </div>
        </div>
    );
}
