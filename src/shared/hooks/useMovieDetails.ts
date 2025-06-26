import {useParams} from 'next/navigation';
import {useQuery} from '@tanstack/react-query';
import {IMovieDetails} from '@/entities/movie/types';
import tmdb from '@/shared/api/tmdb';

export default function useMovieDetails() {
    const {id} = useParams();

    const {data, isLoading, error} = useQuery<IMovieDetails>({
        queryKey: ['movie', id],
        queryFn: async () => {
            if (!id) throw new Error('ID фильма не найден');
            const res = await tmdb.get(`/movie/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    const {data: credits} = useQuery({
        queryKey: ['cast', id],
        queryFn: async () => {
            if (!id) throw new Error('ID фильма не найден, невозможно загрузить информацию об актерах');
            const res = await tmdb.get(`/movie/${id}/credits`);
            return res.data;
        },
        enabled: !!id,
    });

    return {
        data,
        isLoading,
        error,
        credits,
    };
}