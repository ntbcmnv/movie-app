'use client'

import {useRouter, useSearchParams} from 'next/navigation'
import {useQuery} from '@tanstack/react-query'
import {IMovie} from '@/entities/movie/types'
import tmdb from '@/shared/api/tmdb'

export default function useMoviesList() {
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page') || '1');
    const router = useRouter();

    const {data, isLoading, error, isFetching} = useQuery<IMovie[]>({
        queryKey: ['movies', page],
        queryFn: async () => {
            const res = await tmdb.get('/movie/popular', {params: {page}});
            return res.data.results;
        },
    });

    return {
        data,
        isLoading,
        error,
        isFetching,
        page,
        router,
    };
}
